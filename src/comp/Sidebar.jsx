import React, { useState, useEffect } from "react";
import {
    Database,
    LayoutGrid,
    Shield,
    HardDrive,
    BookText,
    Gauge,
    Server,
    Plus,
    HelpCircle,
    ChevronDown,
    Menu,
    X,
    Grip,
} from "lucide-react";

const SidebarItem = ({ icon, label, active = false, small = false }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: active ? "#2563eb" : "#4b5563",
                fontWeight: active ? "600" : "normal",
                fontSize: small ? "13px" : "14px",
                cursor: "pointer",
            }}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
};

const Sidebar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const sidebarContent = (
        <>
            {/* Dropdown */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    padding: "6px 10px",
                    fontSize: "14px",
                    color: "#374151",
                    marginBottom: "24px",
                    cursor: "pointer",
                    marginLeft: "8px"
                }}
            >
                DB Services
                <ChevronDown size={16} />
            </div>

            {/* Menu Links */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    fontSize: "14px",
                    color: "#4b5563",
                }}
            >
                <SidebarItem icon={<Database size={18} />} label="My services" active />
                <SidebarItem icon={<LayoutGrid size={18} />} label="Provisioning" />
                <SidebarItem
                    icon={<Shield size={18} />}
                    label="Availability Machines"
                />
                <SidebarItem icon={<HardDrive size={18} />} label="Dataflix" />
                <SidebarItem icon={<BookText size={18} />} label="ScriptLibrary" />
                <SidebarItem icon={<Gauge size={18} />} label="Benchmarks" />
                <SidebarItem icon={<Server size={18} />} label="Servers" />
            </div>

            {/* Bottom Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    fontSize: "14px",
                    color: "#4b5563",
                    marginTop: "350px",
                }}
            >
                <SidebarItem icon={<Plus size={16} />} label="Invite people" small />
                <SidebarItem
                    icon={<HelpCircle size={16} />}
                    label="Help & Support"
                    small
                />
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Top Bar with Drawer Icon */}
            {isMobile && (
                <div
                    style={{
                        padding: "12px",
                        backgroundColor: "#ffffff",
                        borderBottom: "1px solid #e5e7eb",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <Menu
                        size={24}
                        style={{ cursor: "pointer", color: "#4b5563" }}
                        onClick={() => setIsDrawerOpen(true)}
                    />
                </div>
            )}

            {/* Sidebar */}
            <div
                style={{
                    width: "240px",
                    minHeight: "100vh",
                    backgroundColor: "#fff",
                    borderRight: "1px solid #e5e7eb",
                    padding: "16px",
                    fontFamily: "sans-serif",
                    position: "fixed",
                    top: 0,
                    left: isMobile && !isDrawerOpen ? "-100%" : 0,
                    zIndex: 1000,
                    transition: "left 0.3s ease-in-out",
                }}
            >
                {/* Close Button (only mobile) */}
                {isMobile && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "16px",
                        }}
                    >
                        <X
                            size={20}
                            style={{ cursor: "pointer", color: "#6b7280" }}
                            onClick={() => setIsDrawerOpen(false)}
                        />
                    </div>
                )}

                {/* Logo (only desktop) */}
                {!isMobile && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: "column",
                        }}>
                        <div
                            style={{
                                fontWeight: 600,
                                fontSize: "18px",
                                color: "#1f2937",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "16px",
                            }}
                        >
                            <LayoutGrid size={20} />
                            Tessell
                        </div>
                        <div
                            style={{
                                fontSize: "14px",
                                color: "#1f2937",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "16px",
                                marginLeft: "8px"
                            }}
                        >
                            <Grip size={16} />
                            Apps
                        </div>
                    </div>

                )}

                {sidebarContent}
            </div>
        </>
    );
};

export default Sidebar;
