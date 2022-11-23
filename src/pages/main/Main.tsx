import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import MainHeader from "../../component/main/Header";
import WeatherBox from "../../component/main/WeatherBox";
import { getAstronomyInformation, getWeatherInformation } from "../../lib/api";
import { locationState, startState } from "../../store/state/startData";
import { MOCKUP_ASTRONOMY_DATA, MOCKUP_WEATHER_DATA } from "../../utils/constants";

const Main = () => {
  const [userSelectWeather, setUserSelectWeather] = useRecoilState(startState);
  console.log(userSelectWeather);
  const [selectedFinalAddress, setSelectedFinalAddress] =
    useRecoilState(locationState);
  console.log(selectedFinalAddress);
  const [name, x, y, lon, lat] = selectedFinalAddress;
  const location = { name, x, y, lon, lat };

  const [weather, setWeather] = useState({});

  useEffect(() => {
    let weatherArray: any = {};

    Promise.all(
      [getWeatherInformation(x, y), getAstronomyInformation(lon, lat)]
    ).then(response => response.forEach((data: Weather[] | Astronomy[]) => {
      console.log(data);
      data.forEach((val: any) => {
        weatherArray[val.category] = val;
      })
      setWeather(weatherArray);
      console.log(weatherArray);
    })).catch(error => {
      console.log(error);
      [...MOCKUP_WEATHER_DATA, ...MOCKUP_ASTRONOMY_DATA].forEach((val) => {
        weatherArray[val.category] = val;
      })
      setWeather(weatherArray)
      console.log(weatherArray);
    })

  }, [name]);

  const handleChangeOrder = useCallback((result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return
    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    )
      return;  
    const newUserSelectWeather = [...userSelectWeather];
    const [cutItem] = newUserSelectWeather.splice(result.source.index, 1);
    newUserSelectWeather.splice(destination.index, 0, cutItem)
    setUserSelectWeather(newUserSelectWeather)
  }, [userSelectWeather])

  return (
    <Wrapper className="wr">
      <MainHeader location={location.name} />
      <WeatherWrapper>
        {/* {userSelectWeather.map((userWeather) => (
          <WeatherBox
            userWeather={userWeather}
            weather={weather}
            key={userWeather.category}
          />
        ))} */}
        <DragDropContext onDragEnd={handleChangeOrder}>
          <Droppable droppableId="infoList">
            {provided => (
              <div className="infoList" {...provided.droppableProps} ref={provided.innerRef}>
                {userSelectWeather.map((userWeather, i) => (
                  <Draggable draggableId={userWeather.category} index={i} key={userWeather.category}>
                    {(provided, Snapshot) => {
                      return (
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <WeatherBox
                            // isDragging={Snapshot.isDragging}
                            userWeather={userWeather}
                            weather={weather}
                            key={userWeather.category}
                          />
                        </div>
                      )
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </WeatherWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
`;
const WeatherWrapper = styled.article`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  .infoList {
    width: 100%;
  }
`;



export default Main;
