import React from "react";
import "../css/components.css";
import {
    Button
}from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

export default function Header() {
    function DiscordIcon() {
        return (
            <SvgIcon> <g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z"></path></g></SvgIcon>
        );
    }
    function BuySubscriptionIcon() {
        return (
            <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"></path></g></SvgIcon>
        );
    }
    function TwitterIcon() {
        return (
            <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></g></SvgIcon>
        );
    }
    function ChromeExtensionIcon() {
        return (
            <SvgIcon><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.365 19.833l1.93-3.342a4.499 4.499 0 0 1-4.234-2.315L4.794 8.52a8.003 8.003 0 0 0 5.57 11.313zm2.225.146A8 8 0 0 0 19.602 9.5h-3.86A4.48 4.48 0 0 1 16.5 12a4.48 4.48 0 0 1-.642 2.318l-3.268 5.66zm1.553-6.691l.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.499 2.499 0 0 0 4.308.038zm-8.108-6.62l1.929 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.992 7.992 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path></g></SvgIcon>
        );
    }

    return(
            <div className="footer">
                <div className="footer-info">
                    <span>14167873</span>
                    <span className="footer-gas tag-module">181</span>
                    <span><span className="footer-settings">Settings: </span>auto</span>
                </div>
                <div className="footer-link">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <DiscordIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <ChromeExtensionIcon />
                    </IconButton>
                    <Button className="footer-btn" variant="outlined" startIcon={<BuySubscriptionIcon font-size="small"/>} size="small">
                        BuySubscription
                    </Button>
                </div>
            </div>
    )
}