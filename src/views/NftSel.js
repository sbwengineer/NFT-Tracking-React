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
  FormControl,
  Modal,
  Input,
  Card,
  Select,
  MenuItem,
  OutlinedInput,
//   MenuProps,
  Checkbox,
  ListItemText
}from '@mui/material';

import SvgIcon from '@mui/material/SvgIcon';
import "../css/app.css";
// core components
import Header from "./Header.js"
import Footer from "./Footer.js";

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const columns = [
{ id: 'nft', label: ''},
{ id: 'name', label: 'Name'},
{ id: 'opensea', label: 'OpenSea'},
{
    id: 'score',
    label: 'score',
    align: 'right',
},
{
    id: 'rank',
    label: 'Rank',
    align: 'right',
},
{
    id: 'price',
    label: 'Price',
    align: 'right',
    format: (value) => value.toFixed(3),
},
{
    id: 'buy',
    label: 'Buy',
    align: 'center',
},
{
    id: 'last_sale',
    label: 'Last Sale',
},
{
    id: 'traits',
    label: 'Traits',
}
];

function createData(nft, name, opensea, score, rank, price, buy, last_sale, traits) {
    return {nft, name, opensea, score, rank, price, buy, last_sale, traits}
}
const rows_total = [
    createData('1.gif', '641', "OpenSea", 101045, 1, 0, 0, '', []),
    createData('2.jpg', '641', "OpenSea", 101045, 2, 0, 0, '', []),
    createData('3.gif', '641', "OpenSea", 101045, 3, 0, 0, '', []),
    createData('4.png', '641', "OpenSea", 101045, 4, 0, 0, '', []),
    createData('5.gif', '641', "OpenSea", 101045, 5, 0, 0, '', []),
    createData('6.png', '641', "OpenSea", 101045, 6, 0, 0, '', []),
    createData('7.gif', '641', "OpenSea", 101045, 7, 0, 0, '', []),
    createData('8.jpg', '641', "OpenSea", 101045, 8, 0, 0, '', []),
    createData('9.gif', '641', "OpenSea", 101045, 9, 0, 0, '', []),
    createData('10.jpg', '641', "OpenSea", 101045, 10, 0, 0, '', []),
    createData('11.gif', '641', "OpenSea", 101045, 11, 0, 0, '', []),
    createData('13.png', '641', "OpenSea", 101045, 12, 0, 0, '', []),
    createData('14.jpg', '641', "OpenSea", 101045, 13, 0, 0, '', []),
    createData('15.png', '641', "OpenSea", 101045, 14, 0, 0, '', []),
    createData('16.png', '641', "OpenSea", 101045, 15, 0, 0, '', []),
    createData('17.png', '641', "OpenSea", 101045, 16, 0, 0, '', []),
    createData('18.jpg', '641', "OpenSea", 101045, 17, 0, 0, '', []),
    createData('19.png', '641', "OpenSea", 101045, 18, 0, 0, '', []),
    createData('20.jpg', '641', "OpenSea", 101045, 19, 0, 0, '', []),
    createData('21.gif', '641', "OpenSea", 101045, 20, 0, 0, '', []),
    createData('22.png', '641', "OpenSea", 101045, 21, 0, 0, '', []),
  ];
  let rows = rows_total;

export default function NftSelPage() {
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
    function ListingIcon (){
        return(
            <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17a4 4 0 0 1 4 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z"></path></g></SvgIcon>
        );
    }
    function RankIcon() {
        return(
            <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g></SvgIcon>
        )
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
    function EyeCloseIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z"></path></g></SvgIcon>
    }
    function EyeOpenIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path></g></SvgIcon>
    }
    function ActivityIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"></path></g></SvgIcon>
    }
    function TableExpendCloseIcon(){
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path></g></SvgIcon>
    }
    function TableExpendOpenIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path></g></SvgIcon>
    }
    function OutIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path></g></SvgIcon>
    }
    function BuyIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></g></SvgIcon>
    }
    function BuyFastIcon() {
        return <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></g></SvgIcon>
    }


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);
    const [go_page, setGoPage] = React.useState(0);
    const [list_side_show, setListSideShow] = React.useState(false);
    const [trait_norm, setTraitNorm] = React.useState(JSON.parse(localStorage.getItem('trait-norm')) !== null ? JSON.parse(localStorage.getItem('trait-norm')) : false);
    const [trait_count, setTraitCount] = React.useState(JSON.parse(localStorage.getItem('trait-count')) !== null ? JSON.parse(localStorage.getItem('trait-count')) : false);
    const [bid_mode, setBidMode] = React.useState(false);
    const [notification, setNotification] = React.useState(false);
    const [image, setImage] = React.useState(false);
    const [table_expend, setTableExpend] = React.useState(false);
    const [list_sort_type, setListSortType] = React.useState("all");
    // const [custom_filter, setCustomFilter] = React.useState({
    //     id_type: "name",
    //     page: 0,
    //     price: {min:"", max:""},
    //     rank:{min:"", max:""},
    //     ready: true,
    //     searchableToken: "",
    //     sortLastSale: "",
    //     sortPrice:"",
    //     tokenId:"",
    //     traitFilterDisplay:"",
    //     traitValues:"",
    //     unrevealed:false,
    // });

    const [id_type, setid_type] = React.useState("name")
    const [searchable_token, setSearchableToken] = React.useState("");
    const [sort_price, setSortPrice] = React.useState("none");
    const [sort_last_sale, setSortLastSale] = React.useState("none");
    const [unrevealed, setUnrevealed] = React.useState(false);
    const [rank, setRank] = React.useState({min:"", max:"",})
    const [price, setPrice] = React.useState({min:"", max:"",});

    const [searchable_token_input_val, setSearchableTokenInputVal] = React.useState("");
    const [rank_min_input, setRankMinInput] = React.useState("");
    const [rank_max_input, setRankMaxInput] = React.useState("");
    const [price_min_input, setPriceMinInput] = React.useState("");
    const [price_max_input, setPriceMaxInput] = React.useState("");

    const ApplyPrice = () => {
        setPrice({min:price_min_input, max:price_max_input});
        price_handleClose();
    }

    const ResetPrice = () => {
        setPriceMinInput("");
        setPriceMaxInput("");
        setPrice({min:"", max:""});
    }

    const ApplyRank = () => {
        setRank({min:rank_min_input, max:rank_max_input});
        rank_handleClose();
    }

    const ResetRank = () => {
        setRankMaxInput("");
        setRankMinInput("");
        setRank({min:"", max:"",});
    }

    const CancelSearchableToken = () => {
        setSearchableToken("");
        setSearchableTokenInputVal("");
        handleCloseSearchModal();
    }

    const OkSearchableToken = () => {
        setSearchableToken(searchable_token_input_val);
        handleCloseSearchModal();
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    }
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

    const ResetPage = () => {
        setPage(0);
        setRowsPerPage(50);
    }

    const [open_setting_modal, setOpenSettingModal] = React.useState(false);
    const handleOpenSettingModal = () => setOpenSettingModal(true);
    const handleCloseSettingModal = () => setOpenSettingModal(false);

    const [open_search_modal, setOpenSearchModal] = React.useState(false);
    const handleOpenSearchModal = () => setOpenSearchModal(true);
    const handleCloseSearchModal = () => setOpenSearchModal(false);
    
    const ClickTraitNorm = (event, norm) => {
        localStorage.setItem('trait-norm', norm)
        setTraitNorm(norm);
    }
    const ClickTraitCount = (event, count) => {
        localStorage.setItem('trait-count', count)
        setTraitCount(count);
    }
    const [rank_open, SetRankOpen] = React.useState(false);
    const [rank_anchorEl, setRankAnchorEl] = React.useState(false);
    
    const rank_handleClick = (event) => {
        if(rank_open === false)
        {
          setRankAnchorEl(event.currentTarget);
          SetRankOpen(true);
        }else
          SetRankOpen(false);
    }
    const rank_handleClose = (event) => {
        SetRankOpen(false);
    }

    const [price_open, setPriceOpen] = React.useState(false);
    const [price_anchorEl, setPriceAnchorEl] = React.useState(false);
    
    const price_handleClick = (event) => {
        if(price_open === false)
        {
          setPriceAnchorEl(event.currentTarget);
          setPriceOpen(true);
        }else
          setPriceOpen(false);
    }
    const price_handleClose = (event) => {
        setPriceOpen(false);
    }

    const [last_sale_open, setLastSaleOpen] = React.useState(false);
    const [last_sale_anchorEl, setLastSaleAnchorEl] = React.useState(false);
    
    const last_sale_handleClick = (event) => {
        if(last_sale_open === false)
        {
          setLastSaleAnchorEl(event.currentTarget);
          setLastSaleOpen(true);
        }else
          setLastSaleOpen(false);
    }
    const last_sale_handleClose = (event) => {
        setLastSaleOpen(false);
    }

    const [filters_open, setFiltersOpen] = React.useState(false);
    const [filters_anchorEl, setFiltersAnchorEl] = React.useState(false);
    
    const filters_handleClick = (event) => {
        if(filters_open === false)
        {
          setFiltersAnchorEl(event.currentTarget);
          setFiltersOpen(true);
        }else
          setFiltersOpen(false);
    }
    const filters_handleClose = (event) => {
        setFiltersOpen(false);
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

    const handleListShow = (e) => {
        e.preventDefault();
        setListSideShow(!list_side_show);
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
                  return(<a className="name_link"><span className="name">{val}</span></a>)
              case 'opensea':
                  return(<a href="" className="opensea_link"><span className="name">OpenSea</span></a>)
              case 'score':
                  return(<span className="">{val}</span>)
              case 'rank':
                  return(<span className="tag-module nft-span-1 ">{val}</span>)
              case 'price':
                  return(<span>{"Ξ" + val}</span>)
              case 'buy':
                  return(
                    <span>
                      <Button className="app-top-btn" variant="contained" startIcon={<BuyIcon size="small"/>} size="small" disabled>Fast</Button>
                      <Button className="app-top-btn" variant="contained" size="small" style={{marginLeft:"3px"}}><BuyFastIcon size="small"/></Button>
                    </span>
                  )
              case 'last_sale':
                return(<span>{"Ξ" + val}</span>)
              case 'traits':
                return(<span></span>)
              default:
                return(<span></span>)
        }
    }
    const displayTableHeader = (header) => {
        switch(header) {
            case 'Name':
                return(
                <>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button className={"app-top-btn " + (id_type === "name" ? "active" : "")} onClick={(e) => setid_type('name')}>Name</Button>
                        <Button className={"app-top-btn " + (id_type === "id" ? "active" : "")} onClick={(e) => setid_type('id')}>ID</Button>
                    </ButtonGroup>
                    <Button className="app-top-btn" variant="contained" color="primary" onClick={handleOpenSearchModal}><SearchIcon font-size="small"/></Button>
                </>
                );
            case 'Rank':
                return(
                    <Button className="app-top-btn" aria-describedby={"rank_pop"}  variant="contained" color="primary" endIcon={<RankIcon/>} onClick={rank_handleClick}>Rank</Button>
                )
            case 'Price':
                return(
                    <Button className="app-top-btn" aria-describedby={"price_pop"} variant="contained" color="primary" endIcon={<RankIcon/>} onClick={price_handleClick}>Price</Button>
                )
            case 'Last Sale':
                return(
                    <Button className="app-top-btn" aria-describedby={"last_sale_pop"} variant="contained" color="primary" endIcon={<RankIcon/>} onClick={last_sale_handleClick}>Last Sale</Button>
                )
            case 'Traits':
                return(
                    <Button className="app-top-btn" variant="contained" color="primary" endIcon={<RankIcon/>}>Traits</Button>
                )
            default:
                return(<span>{header}</span>);
        }
      }
    React.useEffect(() => {
    },[list_side_show])
    
    return (
        <div className="page-body">
        <Header />
        <div className="app-main">
            <div className="nft-container">
                <div className="nft-header">
                    <div className="app-header-wrapper">
                        <div className="app-header-container">
                            <label>
                                <span className="app-top-letter highlight-text">TRAITSNIPER</span>
                                <h1 className="app-header-title">Doddles</h1>
                            </label>
                            <label>
                                <span className="app-top-letter">Revealed</span>
                                <span className="tag-module nft-span-1 header-revealed header-span">10,000[99.2%]</span>
                            </label>
                            <label>
                                <span className="app-top-letter">Page</span>
                                <span className="header-span">10,000</span>
                            </label>
                            <label>
                                <span className="app-top-letter">Supply</span>
                                <span className="header-span">10,081</span>
                            </label>
                            <label>
                                <span className="app-top-letter">Royalty</span>
                                <span className="header-span">7.5%</span>
                            </label>
                            <label>
                                <span className="app-top-letter">Floor</span>
                                <span className="header-span">Ξ13.95</span>
                            </label>
                            <label>
                                <span className="app-top-letter">Vol in 1/7</span>
                                <span className="header-span">Ξ400</span>
                                <span className="header-span">Ξ3211</span>
                            </label>
                            <label>
                                <span className="app-top-letter" style={{marginBottom:'4px'}}>Explore</span>
                                <span>
                                    <IconButton className="header-icon" color="primary" aria-label="upload picture" component="span"><OpenseaIcon /></IconButton>
                                    <IconButton className="header-icon" color="primary" aria-label="upload picture" component="span"><EtherscanIcon /></IconButton>
                                    <IconButton className="header-icon" color="primary" aria-label="upload picture" component="span"><TwitterIcon /></IconButton>
                                    <IconButton className="header-icon" color="primary" aria-label="upload picture" component="span"><DiscordIcon /></IconButton>
                                    <IconButton className="header-icon" color="primary" aria-label="upload picture" component="span"><TikifestivalIcon/></IconButton>
                                </span>
                            </label>
                            <label>
                                <span className="app-top-letter">Page</span>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                    <Button className="app-top-btn" onClick={(e) => handleChangePage(e, (page > 0 ? page - 1 : 0))}> &lt; </Button>
                                    <Button className="app-top-btn" aria-describedby={"pagination_pop"} variant="contained" onClick={pagination_handleClick}>{(page + 1) + ' / ' + Math.ceil(rows.length / rowsPerPage) + ' ∙∙∙'} </Button>      
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
                                    <Button className="app-top-btn" onClick={(e) => handleChangePage(e, ((page + 1) * rowsPerPage < rows.length ? page + 1 : page))}> &gt; </Button>
                                </ButtonGroup>
                            </label>
                            <label>
                                <span className="app-top-letter">limit</span>
                                <div className="limit-panel">
                                    <Select
                                    className="select-tag"
                                    value={rowsPerPage}
                                    onChange={handleRowsPerPageChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                    <MenuItem value={100}>100</MenuItem>
                                    </Select>
                                    <Button className="header-reset-btn" variant="contained" color="primary" onClick={ResetPage}>Reset</Button>
                                </div>
                            </label>
                            <label>
                                <span className="app-top-letter">T.norm</span>
                                <span className="header-trait header-span">{trait_norm === false ? "Off" : "On"}</span>
                            </label>
                            <label>
                                <span className="app-top-letter">T.Count</span>
                                <span className="header-trait header-span">{trait_count === false ? "Off" : "On"}</span>
                            </label>
                            <label>
                                <Button className="header-icon-btn" variant="contained" color="primary" size="small" onClick={(e) => handleListShow(e)}><ListingIcon/></Button>
                                <Button className="header-icon-btn" variant="contained" color="primary" size="small" onClick={handleOpenSettingModal}><SettingIcon/></Button>
                                <Button className="header-icon-btn" variant="contained" color="primary" startIcon={<ConnectIcon/>} size="small">Connect</Button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="nft-container-1">
                <div className="nft-header">
                    <div className="app-header-wrapper">
                        <div className="app-header-container">
                            <div>
                                <Input className="search-input" color="info" variant="outlined" />
                                <p></p>
                                <Button className="app-top-btn" variant="contained" color="success" size="small"><SearchIcon font-size="small"/></Button>
                            </div>
                            <div>
                                <span className= "tag-module nft-span-1 ">Clothes</span>
                                <p></p>
                                <Select
                                    className="select-tag"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={['All',]}
                                    // onChange={handleChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                        <Checkbox />
                                        <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="show_panel">
                <div className="left-side">
                    <div className="nft-container-1">
                        <div className="nft-header">
                            <div className="app-header-wrapper">
                                <div className="app-header-container">
                                    <div>
                                        <span className="mode-span">Bid mode</span>
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button className={"app-top-btn " + (bid_mode === false ? "active" : "")} onClick={(e) => setBidMode(false)}>off</Button>
                                            <Button className={"app-top-btn " + (bid_mode === true ? "active" : "")} onClick={(e) => setBidMode(true)}>on</Button>
                                        </ButtonGroup>
                                    </div>
                                    <div>
                                        <span className="mode-span">Notification</span>
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button className={"app-top-btn " + (notification === false ? "active" : "")} onClick={(e) => setNotification(false)}>off</Button>
                                            <Button className={"app-top-btn " + (notification === true ? "active" : "")} onClick={(e) => setNotification(true)}>on</Button>
                                        </ButtonGroup>
                                    </div>
                                    <div>
                                        <span className="mode-span">Image</span>
                                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                            <Button className={"app-top-btn " + (image === false ? "active" : "")} onClick={(e) => setImage(false)}>off</Button>
                                            <Button className={"app-top-btn " + (image === true ? "active" : "")} onClick={(e) => setImage(true)}>on</Button>
                                        </ButtonGroup>
                                    </div>
                                    <Button className="footer-btn" variant="contained" endIcon={unrevealed === true ? <EyeOpenIcon/> : <EyeCloseIcon/>} onClick={(e) => setUnrevealed(!unrevealed)}>
                                        {unrevealed === true ? "Show revealed NFTs" : "Show Unrevealed Nfts"}
                                    </Button>
                                    {/* <Button className="footer-btn" variant="contained" startIcon={<ActivityIcon/>} >
                                        Acitivites
                                    </Button> */}
                                    <Button className="footer-btn" aria-describedby={"filters_pop"} variant="contained" onClick={filters_handleClick}>
                                        Filters
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }} className="table1">
                        <TableContainer sx={{maxHeight:'500px'}}>
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
                <div id="right-side-show">
                    {list_side_show === true ? (
                    <div className  ="right-side">
                        <div className="right-side-container" key="">
                            <div className="right-setting">
                                <Button className={"app-top-btn " + (table_expend?'active': '')} variant="contained" color="primary" size="small" onClick={(e) => setTableExpend(!table_expend)}>{table_expend?<TableExpendOpenIcon size="small"/>:<TableExpendCloseIcon size="small"/>}</Button>
                                <Button className="app-top-btn" variant="contained" color="primary" size="small"><OutIcon size="small"/></Button>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small">
                                    <Button className={"app-top-btn " + (list_sort_type == "all" ? "active" : "")} onClick={(e) => setListSortType("all")}>All</Button>
                                    <Button className={"app-top-btn " + (list_sort_type == "listing" ? "active" : "")} onClick={(e) => setListSortType("listing")}>Listing</Button>
                                    <Button className={"app-top-btn " + (list_sort_type == "sale" ? "active" : "")} onClick={(e) => setListSortType("sale")}>Sale</Button>
                                    <Button className={"app-top-btn " + (list_sort_type == "spilt" ? "active" : "")} onClick={(e) => setListSortType("spilt")}>Spilt</Button>
                                </ButtonGroup>
                            </div>
                            <div className="list-card-pane">
                                <div className="list-card">
                                    <div className="list-card-container">
                                        <a><img src={require('../nft-image/1.gif')} style={{width:'40px', height:'40px'}} /></a>
                                        <div className="item-body">
                                            <div className="item-content">
                                                <div className="item-sub">
                                                    <div className="item-tag">
                                                        <span className="item-tag-span">Listing</span>
                                                    </div>
                                                    <span className="item-tag-muted">Feb 10, 2022, 1:38:39 PM</span>
                                                    <div className="item-buy">
                                                        <span>
                                                            <Button className="app-top-btn" variant="outlined" color="primary"><BuyIcon/></Button>
                                                        </span>    
                                                    </div>
                                                </div>
                                                <div>
                                                    <a>7983</a><span>ranking<b>#3098</b></span><span>is listed at</span><span>3098</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (<></>)}
                </div>
            </div>
        </div>
        <Modal
            open={open_setting_modal}
            onClose={handleCloseSettingModal}
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
        <Modal
            open={open_search_modal}
            onClose={handleCloseSearchModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card variant="outlined" className="modal-card-small">
            <div className="modal_card_div ">
                <h2>Search:</h2>
                <Input className="search-input-full" color="info" variant="outlined" onChange={(e) => setSearchableTokenInputVal(e.currentTarget.value)}/>
                <p></p>
                <Button className="popover-reset-btn" variant="outlined" color="error" onClick={(e) => CancelSearchableToken(e)}>Cancel</Button>
                <Button className="popover-apply-btn" variant="outlined" color="secondary" onClick={(e) => OkSearchableToken(e)}>Ok</Button>
            </div>
            </Card>
        </Modal>
        <Popover
            id={"rank_pop"}
            open={rank_open}
            anchorEl={rank_anchorEl}
            onClose={rank_handleClose}
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
                <div className="popover-panel">
                    <div className="popover-panel-left">
                        <div className="popover-panel-left-input">
                            <label>
                                <span className="app-top-letter">from</span>
                                <Input className="search-input" type="number" color="info" value={rank_min_input} variant="outlined" onChange={(e) => setRankMinInput(e.currentTarget.value)}/>
                            </label>
                            <label>
                                <span className="app-top-letter">to</span>
                                <Input className="search-input" type="number" color="info" value={rank_max_input} variant="outlined" onChange={(e) => setRankMaxInput(e.currentTarget.value)}/>
                            </label>
                        </div>
                        <div className="popover-panel-left-btn">
                            <Button className="popover-reset-btn" variant="outlined" color="error" size="small" onClick={(e) => ResetRank(e)}>Reset</Button>
                            <Button className="popover-apply-btn" variant="outlined" color="secondary" size="small" onClick={(e) => ApplyRank(e)}>Apply</Button>
                        </div>
                    </div>
                    <div className="popover-panel-right">
                        <div>
                            <span className="app-top-letter">shortcuts</span>
                        </div>
                        <Button variant="contained" color="primary" size="small">Top 1%</Button>
                        <Button variant="contained" color="primary" size="small">Top 5%</Button>
                        <Button variant="contained" color="primary" size="small">Top 10%</Button>
                    </div>
                </div>
            </div>
            </Card>
        </Popover>
        <Popover
            id={"price_pop"}
            open={price_open}
            anchorEl={price_anchorEl}
            onClose={price_handleClose}
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
                <div className="price-content">
                    <div>
                        <label>
                            <span className="app-top-letter">sort</span>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{marginLeft:'30px'}}>
                                <Button className={"app-top-btn " + (sort_price === "lowest" ? "active" : "")} onClick={(e) => setSortPrice("lowest")}>Lowest First</Button>
                                <Button className={"app-top-btn " + (sort_price === "none" ? "active" : "")} onClick={(e) => setSortPrice("none")}>None</Button>
                                <Button className={"app-top-btn " + (sort_price === "highest" ? "active" : "")} onClick={(e) => setSortPrice("highest")}>Hightest First</Button>
                            </ButtonGroup>
                        </label>
                    </div>
                    <div className="popover-panel">
                        <div className="popover-panel-left">
                            <div className="popover-panel-left-input">
                                <label>
                                    <span className="app-top-letter">Min(Ξ Ether)</span>
                                    <Input className="search-input" type="number" color="info" variant="outlined" value={price_min_input} onChange={(e) => setPriceMinInput(e.currentTarget.value)}/>
                                </label>
                                <label>
                                    <span className="app-top-letter">Max(Ξ Ether)</span>
                                    <Input className="search-input" type="number" color="info" variant="outlined" value={price_max_input} onChange={(e) => setPriceMaxInput(e.currentTarget.value)}/>
                                </label>
                            </div>
                            <div className="popover-panel-left-btn">
                                <Button className="popover-reset-btn" variant="outlined" color="error" size="small" onClick={(e) => ResetPrice()}>Reset</Button>
                                <Button className="popover-apply-btn" variant="outlined" color="secondary" size="small" onClick={(e) =>ApplyPrice()}>Apply</Button>
                            </div>
                        </div>
                        <div className="popover-panel-right">
                            <div>
                                <span className="app-top-letter">shortcuts</span>
                            </div>
                            <Button variant="contained" color="primary" size="small">All price</Button>
                            <Button variant="contained" color="primary" size="small">Price&gt;0.01</Button>
                        </div>
                    </div>
                </div>
            </div>
            </Card>
        </Popover>  
        <Popover
            id={"last_sale_pop"}
            open={last_sale_open}
            anchorEl={last_sale_anchorEl}
            onClose={last_sale_handleClose}
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
                <div className="last-sale-content">
                    <label>
                        <span className="app-top-letter">sort</span>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button className={"app-top-btn " + (sort_last_sale === "oldest" ? "active" : "")} onClick={(e) => setSortLastSale("oldest")}>Oldest First</Button>
                            <Button className={"app-top-btn " + (sort_last_sale === "none" ? "active" : "")} onClick={(e) => setSortLastSale("none")}> None</Button>
                            <Button className={"app-top-btn " + (sort_last_sale === "newest" ? "active" : "")} onClick={(e) => setSortLastSale("newest")} >Newest First</Button>
                        </ButtonGroup>
                    </label>
                </div>
            </div>
            </Card>
        </Popover> 
        <Popover
            id={"filters_pop"}
            open={filters_open}
            anchorEl={filters_anchorEl}
            onClose={filters_handleClose}
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
                <div className="filters-content">
                   <Button className="" variant="outlined" color="error" style={{marginBottom:"5px"}}>Save Current Filters</Button>
                   <Button className="" variant="outlined" color="primary">Load Existed Filters</Button>
                </div>
            </div>
            </Card>
        </Popover> 
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
        <Footer />
    </div>
    )
}