import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

import sensor_bl_01 from "../imgs/sensor_bl_01.png";
import sensor_br_01 from "../imgs/sensor_br_01.png";
import sensor_ctr_01 from "../imgs/sensor_ctr_01.png";
import sensor_tl_01 from "../imgs/sensor_tl_01.png";
import sensor_tr_01 from "../imgs/sensor_tr_01.png";

const PictureList = [
  {
    id: 1,
    url: sensor_tr_01,
    name: "sensor_tr_01",
  },
  {
    id: 2,
    url: sensor_tl_01,
    name: "sensor_tl_01",
  },
  {
    id: 3,
    url: sensor_ctr_01,
    name: "sensor_ctr_01",
  },
  {
    id: 4,
    url: sensor_br_01,
    name: "sensor_br_01",
  },
  {
    id: 5,
    url: sensor_bl_01,
    name: "sensor_bl_01",
  },
];

function DragDrop() {
  const [board1, setBoard1] = useState([]);
  const [board2, setBoard2] = useState([]);
  const [board3, setBoard3] = useState([]);
  const [board4, setBoard4] = useState([]);
  const [board5, setBoard5] = useState([]);

  const [{ isOverBoard1 }, dropBoard1] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard1(item.id),
    collect: (monitor) => ({
      isOverBoard1: !!monitor.isOver(),
    }),
  }));
  const [{ isOverBoard2 }, dropBoard2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard2(item.id),
    collect: (monitor) => ({
      isOverBoard2: !!monitor.isOver(),
    }),
  }));
  const [{ isOverBoard3 }, dropBoard3] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard3(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [{ isOverBoard4 }, dropBoard4] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard4(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [{ isOverBoard5 }, dropBoard5] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard5(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard1 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard1((board) => [...board, pictureList[0]]);
  };
  const addImageToBoard2 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard2((board2) => [...board2, pictureList[0]]);
  };
  const addImageToBoard3 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard3((board3) => [...board3, pictureList[0]]);
  };
  const addImageToBoard4 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard4((board4) => [...board4, pictureList[0]]);
  };
  const addImageToBoard5 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard5((board5) => [...board5, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <ul>
        <li className="Board containerBoards" ref={dropBoard1}>
          {board1.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </li>
        <li className="Board_02 containerBoards" ref={dropBoard2}>
          {board2.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </li>
        <li className="Board_03 containerBoards" ref={dropBoard3}>
          {board3.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </li>
        <li className="Board_04 containerBoards" ref={dropBoard4}>
          {board4.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </li>
        <li className="Board_05 containerBoards" ref={dropBoard5}>
          {board5.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </li>
      </ul>
    </>
  );
}

export default DragDrop;
