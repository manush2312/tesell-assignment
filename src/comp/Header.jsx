import React, { useState, useEffect } from "react";
import {
    User,
    Bell,
    CircleQuestionMark,
    Megaphone,
    Code,
    X,
    Menu,
} from "lucide-react";

const Header = () => {
    const [isCompact, setIsCompact] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsCompact(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const fullBreadcrumb = "Provisioning / Relational Databases / Oracle Server";

    return (
        <div
            style={{ borderBottom: "1px solid #e5e7eb", fontFamily: "sans-serif" }}
        >
            {/* Top Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 24px",
                    backgroundColor: "#ffffff",
                    position: "relative",
                }}
            >
                {/* Breadcrumb (left) */}
                <div
                    title={fullBreadcrumb}
                    style={{
                        fontSize: "14px",
                        color: "#9ca3af",
                        maxWidth: isCompact ? "170px" : "100%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {fullBreadcrumb}
                </div>

                {/* Right Section */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {isCompact ? (
                        <div style={{ position: "relative" }}>
                            <Menu
                                size={20}
                                style={{ color: "#4b5563", cursor: "pointer" }}
                                onClick={() => setDropdownOpen((prev) => !prev)}
                            />
                            {dropdownOpen && (
                                <div
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: "28px",
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #d1d5db",
                                        borderRadius: "6px",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                                        padding: "12px",
                                        zIndex: 1000,
                                        minWidth: "180px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        gap: "12px",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            color: "#374151",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                    >
                                        Credits: $365
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12px",
                                            width: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <Megaphone
                                                size={18}
                                                style={{ color: "#4b5563", cursor: "pointer" }}
                                            />
                                            <span style={{ fontSize: "14px", color: "#4b5563" }}>
                                                Announcements
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <CircleQuestionMark
                                                size={18}
                                                style={{ color: "#4b5563", cursor: "pointer" }}
                                            />
                                            <span style={{ fontSize: "14px", color: "#4b5563" }}>
                                                Help
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <Bell
                                                size={18}
                                                style={{ color: "#4b5563", cursor: "pointer" }}
                                            />
                                            <span style={{ fontSize: "14px", color: "#4b5563" }}>
                                                Notifications
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "50%",
                                                backgroundColor: "#e5e7eb",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <User size={16} style={{ color: "#374151" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <span style={{ fontSize: "14px", color: "#374151" }}>
                                Credits: $365
                            </span>
                            <div
                                style={{ display: "flex", alignItems: "center", gap: "16px" }}
                            >
                                <Megaphone
                                    size={18}
                                    style={{ color: "#4b5563", cursor: "pointer" }}
                                />
                                <CircleQuestionMark
                                    size={18}
                                    style={{ color: "#4b5563", cursor: "pointer" }}
                                />
                                <Bell
                                    size={18}
                                    style={{ color: "#4b5563", cursor: "pointer" }}
                                />
                                <div
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50%",
                                        backgroundColor: "#e5e7eb",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <User size={16} style={{ color: "#374151" }} />
                                </div>
                            </div>
                        </>
                    )}

                    {/* Code Button (always visible) */}

                </div>
            </div>

            {/* Bottom Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 24px",
                    backgroundColor: "#ffffff",
                    borderTop: "1px solid #f3f4f6",
                }}
            >
                <h1
                    style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#111827",
                        margin: 0,
                    }}
                >
                    Create New Oracle Database Service
                </h1>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <button
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "14px",
                            padding: "4px 8px",
                            border: "none",
                            backgroundColor: "transparent",
                            color: "#3b82f6",
                            cursor: "pointer",
                            fontWeight: 600,
                        }}
                    >
                        <Code size={14} />
                        <span>Code</span>
                    </button>
                    <X size={18} style={{ color: "#6b7280", cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
};

export default Header;
