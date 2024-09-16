import React, { Suspense, useEffect, useRef } from "react";
import Slider from "react-slick";
import ImageList from "@mui/material/ImageList";
import Masonry from "@mui/lab/Masonry";
// import ImageListItem from "@mui/material/ImageListItem";
import style from "./ImageList.module.css";
import { Box, Paper, Skeleton, styled } from "@mui/material";
import { Height } from "@mui/icons-material";

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
    <Box
      sx={{
        width: { xs: "auto", sm: 1300 },
        minHeight: { xs: 200, sm: 500 },
        mt: 1,
      }}
    >
      <Masonry columns={{ xs: 1, md: 3 }} spacing={{ xs: 0.3, md: 1 }}>
        {itemData[alignment as keyof typeof itemData].map(
          (image: string, index: number) => (
            <Box className={style.divImg} key={index}>
              <Suspense
                fallback={
                  <Skeleton variant="rectangular" width={210} height={60} />
                }
              >
                <img
                  srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${image}?w=248&fit=crop&auto=format`}
                  alt={`Category ${alignment} - Image ${index + 1}`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Suspense>
            </Box>
          )
        )}
      </Masonry>
    </Box>
  );
};
export default StandardImageList;

const itemData = {
  Kitchens: [
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/images/1624526348?ver=0",
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/thumb/20240213_112538580_iOS.jpg",
    "https://img42.rajce.idnes.cz/d4203/18/18899/18899977_bac9d1fb52fc4b9e4d04d0b80a51d063/images/1625745902?ver=0",
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/images/1537619555?ver=0",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1587420255",
  ],
  Rooms: [
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1595340044?ver=0",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1578820042",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1586587992",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1613857554?ver=0",
  ],
  Bathrooms: [
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/images/1533171733?ver=0",
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/images/1540287292?ver=0",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/thumb/1578188237",
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/images/1523638257?ver=0",
  ],
  Halls: [
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1578027082?ver=0",
    "https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1610020854?ver=0",
    "https://img29.rajce.idnes.cz/d2903/17/17668/17668500_529bf2f821c6aa7025502a3b9e376475/thumb/1570453141?ver=4",
  ],
};
