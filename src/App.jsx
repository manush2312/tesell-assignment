import { useState } from 'react'
import './App.css'
import NotifIcon from './assets/notification-bell.svg?react'
import QuestionIcon from './assets/question-mark.svg?react'
import AnnounceIcon from "./assets/announcement.svg?react"
import DatabaseUser from "./assets/database-user1.svg?react"
import DatabaseAdd from './assets/database-add.svg?react'
import AvailableIcon from './assets/available.svg?react'
import VideoIcon from "./assets/video.svg?react"
import ScriptIcon from "./assets/script.svg?react"
import SpeedIcon from "./assets/speed.svg?react"
import DatabaseIcon from "./assets/database-plain.svg?react"
import Sidebar from './comp/Sidebar'
import Header from './comp/header'
import ServiceForm from './comp/ServicesRight'

export default function App() {
  const [formData, _] = useState({
    serviceName: 'oracle_09_2023',
    description: '',
    tags: [
      { key: 'key_input', value: 'value_input' },
      { key: 'key2', value: 'value2' }
    ],
    softwareRelease: 'Oracle 21c',
    version: '21.0.0.0',
    containerDatabase: true,
    windowPreference: 'select',
    startDay: 'Sunday',
    startTime: '04:00',
    duration: '0.5',
    autoMinorUpdate: true,
    sla: 'Dev-QA-SLA',
    snapshotTime: '04:00'
  })


  const validateForm = () => {
    const newErrors = {}

    if (!formData.serviceName.trim()) {
      newErrors.serviceName = 'Service name is required'
    }

    if (!formData.softwareRelease) {
      newErrors.softwareRelease = 'Software release is required'
    }

    if (!formData.version) {
      newErrors.version = 'Version is required'
    }

    //   setErrors(newErrors)
    //   return Object.keys(newErrors).length === 0
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      alert('Service created successfully!')
    }
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content" style={{ marginLeft: "13.5%" }}>
        <Header />
        <div className="content-area">
          <div style={{ display: 'flex', gap: '32px' }}>
            {/* Right Panel - Summary */}
            <div style={{ flex: '1' }}>
              <div style={{
                position: 'sticky',
                top: '24px',
                backgroundColor: 'var(--surface-0)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--surface-200)',
                height: "80vh",
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{ padding: '18px', position: 'relative' }}>
                  <div style={{ marginBottom: '10px', position: 'relative' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#1976D2',
                        marginTop: '8px',
                        position: 'relative',
                        zIndex: 2
                      }}></div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          color: '#1976D2',
                          fontSize: '14px',
                          fontWeight: '600',
                          marginBottom: '13px',
                          margin: 0
                        }}>Service Details</h3>
                        <div style={{ color: '#6B7280', fontSize: '12px', marginBottom: '16px' }}>
                          Oracle_service 🔴 | oracle_para_profile
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    {/* Connecting line */}
                    <div style={{
                      position: 'absolute',
                      left: '4px',
                      top: '-55px',
                      width: '1px',
                      height: '70px',
                      backgroundColor: '#9CA3AF',
                      zIndex: 1
                    }} className="connecting-line"></div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#9CA3AF',
                        marginTop: '8px',
                        position: 'relative',
                        zIndex: 2
                      }}></div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          color: '#000000',
                          fontSize: '14px',
                          fontWeight: '600',
                          marginBottom: '13px',
                          margin: 0
                        }}>Additional Settings</h3>
                        <div style={{ color: '#6B7280', fontSize: '12px' }}>
                          No Preference Enabled minor version update |<br />
                          7-day PITR 01:00 snapshot time |
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    width: '100%',
                    borderTop: '2px solid lightgray',
                    padding: '18px',
                  }}>
                  <div
                    className=""
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'start',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'start'
                      }}
                    >
                      <h3 className="heading-md" style={{ fontSize: "16px", color: "gray" }}>Estimated Monthly Price*</h3>
                      <span
                        style={{
                          color: '#1976D2',
                          fontSize: '12px',
                          fontWeight: "500",
                          cursor: 'pointer'
                        }}
                      >
                        View details
                      </span>
                    </div>

                    <div style={{ fontSize: '24px', fontWeight: '600', color: '#000', }}>
                      $99.99
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#1976D2',
                      border: 'none',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '400',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                    onClick={handleSubmit}
                  >
                    + Create service
                  </button>
                </div>
              </div>
            </div>
            {/* Left Panel - Form */}
            <div style={{ flex: '2' }}>
              <ServiceForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

