import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
const itemData = [
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
  {
    img: "https://play-lh.googleusercontent.com/Nhdcc77MHYfXR9LoVhhkpnKbhwpZpCLKfl8dUwVhyqgflBQ5ROBtLsn_2fIongMYeoo6",
    title: "Mario",
  },
];
const MUIImgList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 540 }} rowHeight={164} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 540 }}
        gap={8}
        cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 540, overflowY: "scroll" }}>
        <ImageList variant="masonry" gap={8} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MUIImgList;
