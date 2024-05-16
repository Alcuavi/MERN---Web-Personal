import React from 'react';
import "./AdminLayout.scss";

export function AdminLayout(props) {
    const { children } = props;
    return (
        <div className="admin-layout">
            <div className="admin-layout__left">
                <div className="logo">LOGO</div>
                <span>ADMIN MENU</span>
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
