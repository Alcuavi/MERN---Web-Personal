import React from 'react';
import { Icon } from "../../assets";
import { AdminMenu } from "../../components/Admin/AdminLayout";
import "./AdminLayout.scss";

export function AdminLayout(props) {
    const { children } = props;
    return (
        <div className="admin-layout">
            <div className="admin-layout__left">
                <Icon.LogoWhite className="logo"/>
                <AdminMenu/>
            </div>
            <div className="admin-layout__right">
                <div className="admin-layout__right-header">
                    <span>LOGOUT</span>
                </div>
                <div className="admin-layout__right-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
