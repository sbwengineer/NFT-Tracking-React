import * as React from "react";
import ReactDOM from "react-dom";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';

import {
  Button,
  ButtonGroup,
  Modal,
  Input,
  Card,
}from '@mui/material';

import SvgIcon from '@mui/material/SvgIcon';
import "../css/app.css";
// core components
import Header from "./Header.js"
import Footer from "./Footer.js";

const columns = [
  { id: 'nft', label: ''},
  { id: 'name', label: 'Name'},
  { id: 'status', label: 'Status'},
  {
    id: 'floor',
    label: 'Floor',
    align: 'right',
  },
  {
    id: 'supply',
    label: 'Supply',
    align: 'right',
  },
  {
    id: 'royalty',
    label: 'Royalty',
    align: 'right',
    format: (value) => value.toFixed(1),
  },
  {
    id: 'explore',
    label: 'Explore',
    align: 'center',
  },
  {
    id: 'vol',
    label: 'Vol in 1/7/30 days',
    align: 'right',
  },
  {
    id: 'reveal_time',
    label: 'Expecting reveal time',
  },
  {
    id: 'reveal_at',
    label: 'Revealed At',
  }
];

function createData(nft, name, status, floor, supply, royalty, explore, vol, reveal_time, reveal_at) {
    return {nft, name, status, floor, supply, royalty, explore, vol, reveal_time, reveal_at}
}

const rows_total = [
  createData('1.gif', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('2.jpg', 'abcdef', 1, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('3.gif', 'Flooz GEN F', 2, 0.523, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('4.png', 'Flooz GEN F', 1, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('5.gif', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('6.png', 'Flooz GEN F', 2, 0.467, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('7.gif', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('8.jpg', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('9.gif', 'Flooz GEN F', 3, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('10.jpg', 'Flooz GEN F', 1, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('11.gif', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('13.png', 'Flooz GEN F', 3, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('14.jpg', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('15.png', 'Flooz GEN F', 3, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('16.png', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('17.png', 'Flooz GEN F', 1, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('18.jpg', 'Flooz GEN F', 3, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('19.png', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('20.jpg', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('21.gif', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
  createData('22.png', 'Flooz GEN F', 2, 0.499, 10000, 7.5, '11011', [123, 3487, 3513], '', ''),
];
let rows = rows_total;


export default function AppPage() {
  function SearchIcon (){
    return (
      <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></g></SvgIcon>
    );
  }
  function SettingIcon (){
    return(
      <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></g></SvgIcon>
    );
  }
  function ConnectIcon() {
    return (
      <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path></g></SvgIcon>
    )
  }
  function OpenseaIcon (){
    return (
      <SvgIcon width="1em" height="1em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" alt="OpenSea logo"><path d="M100 50c0 27.613-22.387 50-50 50S0 77.613 0 50 22.387 0 50 0c27.618 0 50 22.387 50 50Z" fill="#2081E2"></path><path d="m24.668 51.68.216-.339L37.89 30.993a.445.445 0 0 1 .78.057c2.173 4.87 4.048 10.926 3.17 14.697-.375 1.551-1.402 3.652-2.558 5.594-.15.283-.314.56-.488.827a.442.442 0 0 1-.37.195H25.048c-.36 0-.57-.39-.38-.683Z" fill="#fff"></path><path d="M82.644 55.461v3.22c0 .186-.113.35-.277.422-1.007.432-4.454 2.014-5.887 4.007-3.658 5.09-6.452 12.37-12.699 12.37h-26.06C28.485 75.48 21 67.97 21 58.702v-.297c0-.247.2-.447.447-.447h14.527c.288 0 .499.267.473.55a4.959 4.959 0 0 0 .519 2.789 5.111 5.111 0 0 0 4.582 2.846h7.192v-5.615h-7.11a.458.458 0 0 1-.37-.72c.078-.118.165-.24.257-.38a51.806 51.806 0 0 0 2.59-4.13c.652-1.14 1.284-2.358 1.792-3.58.103-.221.185-.447.267-.668.139-.39.283-.755.386-1.12.102-.308.184-.632.267-.935.241-1.038.344-2.137.344-3.277 0-.447-.02-.915-.062-1.362-.02-.488-.082-.976-.144-1.464a15.176 15.176 0 0 0-.2-1.305 21.99 21.99 0 0 0-.41-1.952l-.057-.246c-.124-.447-.226-.873-.37-1.32a49.81 49.81 0 0 0-1.367-4.048c-.18-.509-.385-.997-.59-1.485-.303-.735-.612-1.402-.894-2.034-.144-.288-.267-.55-.39-.817a28.758 28.758 0 0 0-.427-.894c-.103-.22-.221-.426-.303-.632l-.879-1.623a.286.286 0 0 1 .324-.416l5.497 1.49h.015c.01 0 .016.005.02.005l.725.2.796.226.293.082v-3.267c0-1.577 1.264-2.856 2.825-2.856.781 0 1.49.319 1.999.837.508.52.827 1.228.827 2.02v4.849l.585.164a.468.468 0 0 1 .134.067c.144.108.35.267.611.462.206.164.427.365.694.57.529.427 1.16.976 1.854 1.608.185.16.365.324.53.488a42.349 42.349 0 0 1 2.85 2.887c.267.303.53.611.797.935.267.329.55.652.796.976.324.432.673.879.976 1.346.144.221.308.447.447.668.39.59.734 1.202 1.063 1.813.139.283.283.591.406.894.365.817.652 1.65.837 2.481.057.18.098.375.118.55v.041c.062.247.083.509.103.776a8.298 8.298 0 0 1-.144 2.563 9.34 9.34 0 0 1-.303 1.074c-.123.35-.246.714-.406 1.058a14.347 14.347 0 0 1-1.104 2.096c-.139.246-.303.508-.468.755-.18.262-.364.509-.529.75-.226.308-.467.632-.714.92-.22.303-.447.606-.693.873a33.57 33.57 0 0 1-1.017 1.16c-.206.242-.427.489-.653.71-.22.246-.447.467-.652.673-.344.344-.632.611-.873.832l-.565.519a.461.461 0 0 1-.303.113H54.39v5.615h5.507a5.152 5.152 0 0 0 3.349-1.239c.324-.282 1.736-1.505 3.406-3.349a.427.427 0 0 1 .21-.128l15.211-4.398a.449.449 0 0 1 .57.432Z" fill="#fff"></path></SvgIcon>
    );
  }
  function EtherscanIcon () {
      return <SvgIcon width="1em" height="1em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Etherscan logo"><circle cx="50" cy="50" r="50" fill="#2E5586"></circle><g clipPath="url(#etherscan_svg__a)"><path d="M32.47 48.566a2.545 2.545 0 0 1 2.554-2.544l4.236.014a2.546 2.546 0 0 1 2.546 2.547v16.021a33.796 33.796 0 0 1 1.76-.45A2.121 2.121 0 0 0 45.2 62.09V42.217a2.548 2.548 0 0 1 2.546-2.548h4.244a2.547 2.547 0 0 1 2.546 2.548V60.66s1.062-.43 2.098-.867a2.126 2.126 0 0 0 1.297-1.957v-21.99a2.547 2.547 0 0 1 2.546-2.547h4.244a2.547 2.547 0 0 1 2.546 2.548v18.107c3.68-2.667 7.408-5.876 10.367-9.733a4.276 4.276 0 0 0 .65-3.992 29.95 29.95 0 0 0-10.752-14.534 29.933 29.933 0 0 0-17.155-5.694c-16.633-.224-30.38 13.359-30.378 30a29.914 29.914 0 0 0 3.983 15.007 3.792 3.792 0 0 0 3.616 1.874c.803-.071 1.803-.17 2.991-.31a2.12 2.12 0 0 0 1.88-2.106v-15.9" fill="#fff"></path><path d="M32.377 74.26a29.976 29.976 0 0 0 43.204-8.582A30.003 30.003 0 0 0 80 50.001c0-.691-.032-1.374-.078-2.054-10.956 16.345-31.184 23.988-47.545 26.314" fill="#BFCFDA"></path></g><defs><clipPath><path fill="#fff" transform="translate(20 20)" d="M0 0h60v60H0z"></path></clipPath></defs></SvgIcon>
  }
  function TwitterIcon () {
      return <SvgIcon width="1em" height="1em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Twitter logo"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#1B9DF0"></path><path d="M40.85 76.375c22.175 0 34.3-18.375 34.3-34.3 0-.525 0-1.05-.025-1.55 2.35-1.7 4.4-3.825 6.025-6.25-2.15.95-4.475 1.6-6.925 1.9 2.5-1.5 4.4-3.85 5.3-6.675a24.412 24.412 0 0 1-7.65 2.925c-2.2-2.35-5.325-3.8-8.8-3.8-6.65 0-12.05 5.4-12.05 12.05 0 .95.1 1.875.325 2.75-10.025-.5-18.9-5.3-24.85-12.6a12.093 12.093 0 0 0-1.625 6.05c0 4.175 2.125 7.875 5.375 10.025-1.975-.05-3.825-.6-5.45-1.5v.15c0 5.85 4.15 10.7 9.675 11.825-1 .275-2.075.425-3.175.425a11.51 11.51 0 0 1-2.275-.225 12.037 12.037 0 0 0 11.25 8.375A24.233 24.233 0 0 1 25.3 71.1c-.975 0-1.925-.05-2.875-.175 5.275 3.45 11.625 5.45 18.425 5.45Z" fill="#fff"></path></SvgIcon>
  }
  function DiscordIcon () {
      return <SvgIcon width="1em" height="1em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Discord logo"><circle cx="50" cy="50" r="50" fill="#5865F2"></circle><path d="M70.793 30.883a49.48 49.48 0 0 0-12.213-3.788.186.186 0 0 0-.197.093 34.47 34.47 0 0 0-1.52 3.123c-4.612-.69-9.2-.69-13.717 0a31.609 31.609 0 0 0-1.545-3.123.193.193 0 0 0-.196-.093 49.342 49.342 0 0 0-12.213 3.788.174.174 0 0 0-.08.069c-7.778 11.62-9.91 22.956-8.864 34.15a.206.206 0 0 0 .078.141c5.132 3.77 10.103 6.057 14.982 7.574a.194.194 0 0 0 .21-.07 35.56 35.56 0 0 0 3.066-4.985.19.19 0 0 0-.104-.264 32.76 32.76 0 0 1-4.68-2.23.192.192 0 0 1-.02-.32c.315-.236.63-.48.93-.728a.185.185 0 0 1 .194-.027c9.82 4.484 20.45 4.484 30.153 0a.185.185 0 0 1 .197.024c.3.248.615.495.932.731.108.081.101.25-.017.32a30.745 30.745 0 0 1-4.683 2.228.192.192 0 0 0-.101.266 39.937 39.937 0 0 0 3.062 4.983.19.19 0 0 0 .21.072c4.903-1.517 9.874-3.805 15.007-7.574a.193.193 0 0 0 .078-.138c1.25-12.942-2.096-24.184-8.871-34.15a.152.152 0 0 0-.078-.072ZM40.05 58.286c-2.956 0-5.392-2.714-5.392-6.047 0-3.333 2.389-6.047 5.392-6.047 3.027 0 5.44 2.738 5.392 6.047 0 3.333-2.389 6.047-5.392 6.047Zm19.937 0c-2.956 0-5.392-2.714-5.392-6.047 0-3.333 2.388-6.047 5.392-6.047 3.027 0 5.44 2.738 5.392 6.047 0 3.333-2.365 6.047-5.392 6.047Z" fill="#fff"></path></SvgIcon>
  }
  function DiscordSettingIcon() {
    return <SvgIcon> <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z"></path></g></SvgIcon>
  }
  function TikifestivalIcon() {
    return <SvgIcon width="1em" height="1em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Website logo"><path d="M100 50c0 27.613-22.387 50-50 50S0 77.613 0 50 22.387 0 50 0c27.618 0 50 22.387 50 50Z" fill="#fff"></path><path d="M50 80c-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30Zm-6.87-6.999A53.7 53.7 0 0 1 38.081 53H26.186A24.024 24.024 0 0 0 43.13 73.001ZM44.09 53A47.744 47.744 0 0 0 50 73.256 47.715 47.715 0 0 0 55.91 53H44.09Zm29.724 0H61.919a53.7 53.7 0 0 1-5.049 20.001A24.024 24.024 0 0 0 73.814 53Zm-47.628-6h11.895a53.7 53.7 0 0 1 5.049-20.001A24.024 24.024 0 0 0 26.186 47Zm17.907 0h11.814A47.715 47.715 0 0 0 50 26.744 47.715 47.715 0 0 0 44.09 47h.003ZM56.87 26.999A53.7 53.7 0 0 1 61.919 47h11.895A24.024 24.024 0 0 0 56.87 26.999Z" fill="#6366F1"></path></SvgIcon>
  }
  const [page, setPage] = React.useState(0);
  //const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [go_page, setGoPage] = React.useState(0);
  const rowsPerPage = 20;
  const [search_name, setSearchName] = React.useState("");
  const [search_name_ok, setSearchNameOk] = React.useState("");
  const [status_filter, setStatusFilter] = React.useState(0);
  const [floor_sort, setFloorSort] = React.useState(0);
  const [floor_sort_apply, setFloorSortApply] = React.useState(0);
  const [vol_sort_type, setVolSortType] = React.useState(0);
  const [vol_sort, setVolSort] = React.useState(0);
  const [trait_norm, setTraitNorm] = React.useState(JSON.parse(localStorage.getItem('trait-norm')) !== null ? JSON.parse(localStorage.getItem('trait-norm')) : false);
  const [trait_count, setTraitCount] = React.useState(JSON.parse(localStorage.getItem('trait-count')) !== null ? JSON.parse(localStorage.getItem('trait-count')) : false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const GoPage = () => {
    if(go_page > 0 && go_page <= Math.ceil(rows.length / rowsPerPage))
      setPage(go_page - 1);
    SetPaginationOpen(false);
  }

  const [pagination_open, SetPaginationOpen] = React.useState(false);
  const [pagination_anchorEl, setPaginationAnchorEl] = React.useState(false);
  
  const pagination_handleClick = (event) => {
    if(pagination_open === false)
    {
      setPaginationAnchorEl(event.currentTarget);
      SetPaginationOpen(true);
    }else
      SetPaginationOpen(false);
  }
  const pagination_handleClose = (event) => {
    SetPaginationOpen(false);
  }

  const [floor_open, SetFloorOpen] = React.useState(false);
  const [floor_anchorEl, setFloorAnchorEl] = React.useState(false);
  
  const floor_handleClick = (event) => {
    if(floor_open === false)
    {
      setFloorAnchorEl(event.currentTarget);
      SetFloorOpen(true);
    }else
      SetFloorOpen(false);
  }
  const floor_handleClose = (event) => {
    SetFloorOpen(false);
  }

  const [vol_open, SetVolOpen] = React.useState(false);
  const [vol_anchorEl, setVolAnchorEl] = React.useState(false);
  
  const vol_handleClick = (event) => {
    if(vol_open === false)
    {
      setVolAnchorEl(event.currentTarget);
      SetVolOpen(true);
    }else
      SetVolOpen(false);
  }
  const vol_handleClose = (event) => {
    SetVolOpen(false);
  }

  const [image_anchorEl, setImageAnchorEl] = React.useState(false);
  const [image_hover_now, setImageHoverNow] = React.useState("/1.gif");

  const image_handleEnter = (event,val) => {
    const element = event.currentTarget;
    const dataAttribute = element.getAttribute('src');
    // console.log(require('../nft-image' + dataAttribute));
    setImageHoverNow(dataAttribute);
    setImageAnchorEl(event.currentTarget);
  }
  const image_handleClose = (event) => {
    setImageAnchorEl(null);
  }
  const image_open = Boolean(image_anchorEl);

  const SearchNameSet = () => {
    rows = rows_total.filter(col => col.name.toLowerCase().includes(search_name.toLowerCase()))
    rows = rows.filter(col => (col.status === status_filter || status_filter === 0));
    if(floor_sort_apply === 1)
      rows = rows.sort((a,b) => a.floor - b.floor);
    else if(floor_sort_apply ===2)
     rows = rows.sort((a,b) => b.floor - a.floor);
    setSearchNameOk(search_name);
  }

  const ClickStatusFilter = (event,status) => {
    rows = rows_total.filter(col => (col.status === status || status === 0))
    rows = rows.filter(col => col.name.toLowerCase().includes(search_name_ok.toLowerCase()));
    if(floor_sort_apply === 1)
      rows = rows.sort((a,b) => a.floor - b.floor);
    else if(floor_sort_apply ===2)
     rows = rows.sort((a,b) => b.floor - a.floor);
    setStatusFilter(status);
  }

  const ClickFloorSort = (event, status) => {
      setFloorSort(status);
  }
  const ClickFloorSortReset = (event) => {
    rows = rows_total.filter(col => (col.status === status_filter || status_filter === 0))
    rows = rows.filter(col => col.name.toLowerCase().includes(search_name_ok.toLowerCase()));
    setFloorSort(0);
    setFloorSortApply(0);
  }
  const ClickFloorSortApply = (event) => {
    rows = rows_total.filter(col => (col.status === status_filter || status_filter === 0))
    rows = rows.filter(col => col.name.toLowerCase().includes(search_name_ok.toLowerCase()));
    if(floor_sort === 1)
      rows = rows.sort((a,b) => a.floor - b.floor);
    else if(floor_sort ===2)
     rows = rows.sort((a,b) => b.floor - a.floor);
    setFloorSortApply(floor_sort);
  }

  const ClickVolSortType = (event, sort_type) => {
    setVolSortType(sort_type);
  }

  const ClickVolSort = (event, vol) => {
    setVolSort(vol);
  }

  const [open_modal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const ClickTraitNorm = (event, norm) => {
    localStorage.setItem('trait-norm', norm)
    setTraitNorm(norm);
  }
  const ClickTraitCount = (event, count) => {
    localStorage.setItem('trait-count', count)
    setTraitCount(count);
  }


  function displaydata(id, val){
      switch (id)
      {
            case 'nft':
                return(
                  <div>
                    <img src={require('../nft-image/' + val)} style={{width:'32px', height:'32px'}}  aria-owns={image_open ? 'image_pop' : undefined} aria-haspopup="true" onMouseEnter={image_handleEnter} onMouseLeave={image_handleClose}/>
                  </div>
                );
            case 'name':
                return(<a className="name_link" href={"./" + val}><span>⭐</span><span className="name highlight">{val}</span></a>)
            case 'status':
                if(val === 1)
                  return(<span className="tag-module status-revealed">Revealed</span>)
                else if(val === 2)
                  return(<span className="tag-module status-unrevealed">Unrevealed</span>)
                else if(val == 3)
                  return(<span className="tag-module status-revealing">Revealing</span>)
            case 'floor':
                return(<span className="">{"Ξ" + val}</span>)
            case 'supply':
                return(<span>{val}</span>)
            case 'royalty':
                return(<span>{val + '%'}</span>)
            case 'explore':
                return(
                  <span>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <OpenseaIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <EtherscanIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <DiscordIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                      <TikifestivalIcon />
                    </IconButton>
                  </span>
                )
            case 'vol':
                  return(
                    <div><span className="tag-module vol">{"Ξ" + val[0]}</span><span className="tag-module vol">{"Ξ" + val[1]}</span><span className="tag-module vol">{"Ξ" + val[2]}</span></div>
                  );
            case 'reveal_time':
            break;
            case 'reveal_at':
            break;
            default:
                return 'a';
      }
  }

  const displayTableHeader = (header) => {
    switch(header) {
      case 'Floor':
        return(<Button color="primary" aria-describedby={"floor_pop"} variant="contained" onClick={floor_handleClick} size="small">{header}</Button>);
      case 'Vol in 1/7/30 days':
        return(<Button color="primary" aria-describedby={"vol_pop"} variant="contained" onClick={vol_handleClick} size="small">{header}</Button>);
      default:
        return(<span>{header}</span>);
    }
  }

  // React.useEffect (() => {
    
  // },[page]);

  return (
    <>
      <div className="page-body">
        <Header/>
        <div className="app-main">
          <div className="app-container">
            <div className="app-header">
              <div className="app-header-wrapper">
                <div className="app-header-container">
                  <label>
                    <span className="app-top-letter highlight-text">TRAITSNIPER</span>
                    <h1 className="app-header-title">On-going Projects</h1>
                  </label>
                  <label>
                    <span className="app-top-letter">Status</span>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button className={"app-top-btn " + (status_filter === 0 ? "active" : "")} onClick={(e) => ClickStatusFilter(e,0)}>All</Button>
                      <Button className={"app-top-btn " + (status_filter === 1 ? "active" : "")} onClick={(e) => ClickStatusFilter(e,1)}>Revealed</Button>
                      <Button className={"app-top-btn " + (status_filter === 2 ? "active" : "")} onClick={(e) => ClickStatusFilter(e,2)}>Unrevealed</Button>
                      <Button className={"app-top-btn " + (status_filter === 3 ? "active" : "")} onClick={(e) => ClickStatusFilter(e,3)}>Revealing</Button>
                    </ButtonGroup>
                  </label>
                  <label>
                    <span className="app-top-letter">Page</span>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button className="app-top-btn" onClick={(e) => handleChangePage(e, (page > 0 ? page - 1 : 0))}> &lt; </Button>
                      <Button className="app-top-btn" aria-describedby={"pagination_pop"} variant="contained" onClick={pagination_handleClick}>{(page + 1) + '/' + Math.ceil(rows.length / rowsPerPage) + '∙∙∙'} </Button>                   
                      <Button className="app-top-btn" onClick={(e) => handleChangePage(e, ((page + 1) * rowsPerPage < rows.length ? page + 1 : page))}> &gt; </Button>
                    </ButtonGroup>
                  </label>
                  <label>
                    <span className="app-top-letter">Project Name</span>
                    <div>
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Input className="search-input" color="info" variant="outlined" onChange={(e) => setSearchName(e.currentTarget.value)}/>
                        <Button className="app-top-btn" onClick={SearchNameSet}><SearchIcon font-size="small" /></Button>
                      </ButtonGroup>
                    </div>
                  </label>
                </div>
                <div>
                  <label>
                    <span className="app-top-letter">Setting</span>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button className="app-top-btn" onClick={handleOpenModal}><SettingIcon/></Button>
                      <Button className="app-top-btn" startIcon={<ConnectIcon/>}>Connect</Button>
                    </ButtonGroup>
                  </label>
                </div>
              </div>
            </div>
            <div className="table-content">
              <Paper sx={{ width: '100%', overflow: 'hidden' }} className="table1">
                <TableContainer sx={{ maxHeight: 'calc(100vh- 100px)' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                          >
                            {displayTableHeader(column.label)}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.nft}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {displaydata(column.id, value)}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* <TablePagination style={{display:'none'}}
                  rowsPerPageOptions={[10, 25, 100]}
                  component="span"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
              </Paper>
            </div>
          </div>
        </div>
        <Popover
          id={"image_pop"}
          sx={{
            pointerEvents: 'none',
          }}
          open={image_open}
          anchorEl={image_anchorEl}
          onClose={image_handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          disableRestoreFocus
        >
          <Card variant="outlined" className="popover-card">
            <div className="popover_card_div">
              <img src={image_hover_now === '/1.gif' ? require('../nft-image' + image_hover_now) : image_hover_now} style={{width:'300px', height:'300px'}}/>
            </div>
          </Card>
        </Popover>
        <Popover
          id={"floor_pop"}
          open={floor_open}
          anchorEl={floor_anchorEl}
          onClose={floor_handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Card variant="outlined" className="popover-card">
            <div className="popover_card_div">
            <p>SORT</p>
            <ButtonGroup variant="contained" aria-label="outlined success button group" color="success">
              <Button className={"app-top-btn " + (floor_sort === 0 ? "active" : "")} onClick={(e) => ClickFloorSort(e,0)}>None</Button>
              <Button className={"app-top-btn " + (floor_sort === 1 ? "active" : "")} onClick={(e) => ClickFloorSort(e,1)}>Ascending</Button>
              <Button className={"app-top-btn " + (floor_sort === 2 ? "active" : "")} onClick={(e) => ClickFloorSort(e,2)}>Decending</Button>
            </ButtonGroup>
            <p></p>
            <Button className="popover-reset-btn" variant="outlined" color="error" onClick={(e) => ClickFloorSortReset(e)}>Reset</Button>
            <Button className="popover-apply-btn" variant="outlined" color="secondary" onClick={(e) => ClickFloorSortApply(e)}>Apply</Button>
            </div>
          </Card>
        </Popover>  
        <Popover
          id={"vol_pop"}
          open={vol_open}
          anchorEl={vol_anchorEl}
          onClose={vol_handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Card variant="outlined" className="popover-card">
            <div className="popover_card_div">
            <p>SORT</p>
            <ButtonGroup variant="contained" aria-label="outlined success button group" color="success">
              <Button className={"app-top-btn " + (vol_sort_type === 0 ? "active" : "")} onClick={(e) => ClickVolSortType(e,0)}>None</Button>
              <Button className={"app-top-btn " + (vol_sort_type === 1 ? "active" : "")} onClick={(e) => ClickVolSortType(e,1)}>1 days</Button>
              <Button className={"app-top-btn " + (vol_sort_type === 2 ? "active" : "")} onClick={(e) => ClickVolSortType(e,2)}>7 days</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup variant="contained" aria-label="outlined success button group" color="success">
              <Button className={"app-top-btn " + (vol_sort === 0 ? "active" : "")} onClick={(e) => ClickVolSort(e,0)}>None</Button>
              <Button className={"app-top-btn " + (vol_sort === 1 ? "active" : "")} onClick={(e) => ClickVolSort(e,1)}>Ascending</Button>
              <Button className={"app-top-btn " + (vol_sort === 2 ? "active" : "")} onClick={(e) => ClickVolSort(e,2)}>Decending</Button>
            </ButtonGroup>
            <p></p>
            <Button className="popover-reset-btn" variant="outlined" color="error">Reset</Button>
            <Button className="popover-apply-btn" variant="outlined" color="secondary">Apply</Button>
            </div>
          </Card>
        </Popover>  
        <Popover
          id={"pagination_pop"}
          open={pagination_open}
          anchorEl={pagination_anchorEl}
          onClose={pagination_handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Card variant="outlined" className="popover-card">
            <div className="popover_card_div">
              <Input className="popover-input" type="number" defaultValue={page+1} onChange={(e) => setGoPage(e.currentTarget.value)}/>
              <Button variant="contained" color="success" size="small" onClick={GoPage} >Go</Button>
            </div>
          </Card>
        </Popover>
        <Modal
          open={open_modal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card variant="outlined" className="modal-card">
            <div className="modal_card_div ">
              <h2>Settings</h2>
              <h3>Gas Price</h3>
              <div className="gas-price-alert">
                <p className="gas-price-alert-msg">Customizable gas is only available for subscriber, checkout our discord on how to be a subscriber.</p>
                <Button className="gas-price-alert-btn" variant="contained" startIcon={<DiscordSettingIcon font-size="small"/>} size="small">
                    Discord
                </Button>
              </div>
              <div className="gas-mode-btn-panel">
                <label>
                  <span className="app-top-letter">Enabled</span>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button className={"app-top-btn "} disabled>on</Button>
                    <Button className={"app-top-btn "} disabled>off</Button>
                  </ButtonGroup>
                </label>
                <label>
                  <span className="app-top-letter">Gas mode</span>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button className={"app-top-btn "} disabled>Fast(89)</Button>
                    <Button className={"app-top-btn "} disabled>Instant(107)</Button>
                    <Button className={"app-top-btn "} disabled>Mad(154)</Button>
                    <Button className={"app-top-btn "} disabled>Custom</Button>
                  </ButtonGroup>
                </label>
              </div>
              <h3>Rarity Rank</h3>
              <div className="rarity-rank-btn-panel">
                <label className="trait-normalization-btn">
                  <span className="app-top-letter">trait normalization</span>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button className={"app-top-btn " + (trait_norm === false ? "active" : "")} onClick={(e) => ClickTraitNorm(e,false)}>off</Button>
                    <Button className={"app-top-btn " + (trait_norm === true ? "active" : "")} onClick={(e) => ClickTraitNorm(e,true)}>on</Button>
                  </ButtonGroup>
                </label>
                <label>
                  <span className="app-top-letter">Trait count</span>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button className={"app-top-btn " + (trait_count === false ? "active" : "")} onClick={(e) => ClickTraitCount(e,false)}>off</Button>
                    <Button className={"app-top-btn " + (trait_count === true ? "active" : "")} onClick={(e) => ClickTraitCount(e,true)}>on</Button>
                  </ButtonGroup>
                </label>
              </div>
            </div>
          </Card>
        </Modal>
        <Footer/>    
      </div>
    </>
  )
}