import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import style from "./ImageList.module.css";

interface itemData {
  Kitchens: string[];
  Rooms: string[];
  Bathrooms: string[];
  Halls: string[];
  [key: string]: string[];
}

interface StandartImageListProps {
  alignment: string;
}
const StandardImageList = ({ alignment }: StandartImageListProps) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData[alignment as keyof typeof itemData].map(
        (image: string, index: number) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${image}?w=248&fit=crop&auto=format`}
              alt={`Category ${alignment} - Image ${index + 1}`}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ImageListItem>
        )
      )}
    </ImageList>
  );
};
export default StandardImageList;

const itemData = {
  Kitchens: [
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/images/1624526348?ver=0",
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/thumb/20240213_112538580_iOS.jpg",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1589966584",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1577290975",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1587420255",
  ],
  Rooms: [
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/thumb/20240213_112538580_iOS.jpg",
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/thumb/1635379692",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1578820042",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1586587992",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1585116425",
  ],
  Bathrooms: [
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/thumb/1630625115",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1578188237",
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/thumb/1560121487",
  ],
  Halls: [
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1578027093",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1581593556",
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/thumb/1570453141?ver=4",
  ],
};
