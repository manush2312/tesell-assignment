import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({})

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleTagRemove = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }))
  }

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
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
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
      {/* Sidebar */}
      <div className="sidebar">
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div style={{ 
              width: '24px', 
              height: '24px', 
              backgroundColor: '#1976D2', 
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              T
            </div>
            <span className="heading-md" style={{ color: '#1976D2' }}>Tessell</span>
          </div>
        </div>

        <nav>
          <div style={{ marginBottom: '16px' }}>
            <div className="body-secondary" style={{ 
              color: '#6B7280', 
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Apps
            </div>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <div className="body-secondary" style={{ 
              color: '#6B7280', 
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              DB Services
            </div>
            <a href="#" className="nav-item active">
              <span>📊</span>
              <span>My services</span>
            </a>
            <a href="#" className="nav-item">
              <span>⚙️</span>
              <span>Provisioning</span>
            </a>
            <a href="#" className="nav-item">
              <span>🔧</span>
              <span>Availability Machines</span>
            </a>
            <a href="#" className="nav-item">
              <span>📈</span>
              <span>Dataflix</span>
            </a>
            <a href="#" className="nav-item">
              <span>📚</span>
              <span>ScriptLibrary</span>
            </a>
            <a href="#" className="nav-item">
              <span>⚡</span>
              <span>Benchmarks</span>
            </a>
            <a href="#" className="nav-item">
              <span>🖥️</span>
              <span>Servers</span>
            </a>
          </div>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
          <a href="#" className="nav-item">
            <span>👥</span>
            <span>Invite people</span>
          </a>
          <a href="#" className="nav-item">
            <span>❓</span>
            <span>Help & Support</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="body-secondary" style={{ color: '#6B7280' }}>
                Provisioning / Relational Databases / Oracle Server
              </span>
            </div>
            <h1 className="heading-lg">Create New Oracle Database Service</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="body-secondary">Credits: $365</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn btn-secondary">📋</button>
              <button className="btn btn-secondary">❓</button>
              <button className="btn btn-secondary">🔔</button>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                backgroundColor: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                👤
              </div>
            </div>
            <button className="btn btn-secondary">
              &lt;/&gt; Code
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div style={{ display: 'flex', gap: '32px' }}>
            {/* Left Panel - Form */}
            <div style={{ flex: '2' }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%', 
                    backgroundColor: '#1976D2',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px'
                  }}>
                    •
                  </div>
                  <span className="heading-md" style={{ color: '#1976D2' }}>Service Details</span>
                </div>
                <div style={{ marginLeft: '32px' }}>
                  <div className="body-secondary" style={{ color: '#6B7280' }}>
                    Oracle_service 🔴 oracle_para_profile
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <span className="body-secondary" style={{ color: '#6B7280' }}>Additional Setting</span>
                    <br />
                    <span className="body-secondary" style={{ color: '#6B7280' }}>
                      No Preference Enabled minor version update<br />
                      7-day PITR 01:00 snapshot time
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-container">
                <div className="form-section">
                  <h2 className="heading-md" style={{ marginBottom: '8px' }}>Service Details</h2>
                  <p className="body-secondary" style={{ color: '#6B7280', marginBottom: '24px' }}>
                    Service Name, Service Description, Software Release
                  </p>

                  <div className="form-group">
                    <label className="form-label">Service Name</label>
                    <select 
                      className="form-select"
                      value={formData.serviceName}
                      onChange={(e) => handleInputChange('serviceName', e.target.value)}
                    >
                      <option value="oracle_09_2023">oracle_09_2023</option>
                      <option value="oracle_10_2023">oracle_10_2023</option>
                      <option value="oracle_11_2023">oracle_11_2023</option>
                    </select>
                    {errors.serviceName && <div className="error-message">{errors.serviceName}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Description (optional)</label>
                    <textarea 
                      className="form-textarea"
                      placeholder="Add a description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tags</label>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      <input 
                        className="form-input" 
                        placeholder="Key" 
                        style={{ flex: 1 }}
                      />
                      <span style={{ alignSelf: 'center' }}>:</span>
                      <input 
                        className="form-input" 
                        placeholder="Value" 
                        style={{ flex: 1 }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                      {formData.tags.map((tag, index) => (
                        <div key={index} className="tag">
                          <span>{tag.key} : {tag.value}</span>
                          <button 
                            type="button"
                            className="tag-remove"
                            onClick={() => handleTagRemove(index)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Engine configuration</label>
                    <p className="helper-text">
                      Adjustable parameters, performance optimization, fine-tuning options
                    </p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Software Release</label>
                      <select 
                        className="form-select"
                        value={formData.softwareRelease}
                        onChange={(e) => handleInputChange('softwareRelease', e.target.value)}
                      >
                        <option value="Oracle 21c">Oracle 21c</option>
                        <option value="Oracle 19c">Oracle 19c</option>
                        <option value="Oracle 18c">Oracle 18c</option>
                      </select>
                      {errors.softwareRelease && <div className="error-message">{errors.softwareRelease}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Version</label>
                      <select 
                        className="form-select"
                        value={formData.version}
                        onChange={(e) => handleInputChange('version', e.target.value)}
                      >
                        <option value="21.0.0.0">21.0.0.0</option>
                        <option value="19.0.0.0">19.0.0.0</option>
                        <option value="18.0.0.0">18.0.0.0</option>
                      </select>
                      {errors.version && <div className="error-message">{errors.version}</div>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Create as a Container Database</label>
                  </div>
                </div>

                <div className="form-section">
                  <h2 className="heading-md" style={{ marginBottom: '8px' }}>Additional settings</h2>
                  <p className="body-secondary" style={{ color: '#6B7280', marginBottom: '24px' }}>
                    Maintenance Window, Availability machine
                  </p>

                  <div className="form-group">
                    <label className="form-label">Maintenance Window</label>
                    <p className="helper-text">
                      Describing what maintenance window is
                    </p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Window Preference</label>
                    <div className="radio-group">
                      <div className="radio-item">
                        <input 
                          type="radio" 
                          id="no-preference" 
                          name="windowPreference" 
                          value="none"
                          checked={formData.windowPreference === 'none'}
                          onChange={(e) => handleInputChange('windowPreference', e.target.value)}
                          className="radio-input"
                        />
                        <label htmlFor="no-preference" className="radio-label">No Preferences</label>
                      </div>
                      <div className="radio-item">
                        <input 
                          type="radio" 
                          id="select-window" 
                          name="windowPreference" 
                          value="select"
                          checked={formData.windowPreference === 'select'}
                          onChange={(e) => handleInputChange('windowPreference', e.target.value)}
                          className="radio-input"
                        />
                        <label htmlFor="select-window" className="radio-label">Select Window</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Start day</label>
                      <select 
                        className="form-select"
                        value={formData.startDay}
                        onChange={(e) => handleInputChange('startDay', e.target.value)}
                      >
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Start time</label>
                      <input 
                        type="time"
                        className="form-input"
                        value={formData.startTime}
                        onChange={(e) => handleInputChange('startTime', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Duration</label>
                    <select 
                      className="form-select"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    >
                      <option value="0.5">0.5</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input 
                        type="checkbox"
                        id="auto-minor-update"
                        checked={formData.autoMinorUpdate}
                        onChange={(e) => handleInputChange('autoMinorUpdate', e.target.checked)}
                        style={{ 
                          width: '16px', 
                          height: '16px',
                          accentColor: '#1976D2'
                        }}
                      />
                      <label htmlFor="auto-minor-update" className="form-label" style={{ margin: 0 }}>
                        Enable auto minor version update
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Availability Machine Preferences</label>
                    <p className="helper-text">
                      Here you can define your data protection SLA and schedule. Once the database has been created, you can further define the data availability and access policies from the Availability Machine app.
                    </p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">SLA</label>
                      <select 
                        className="form-select"
                        value={formData.sla}
                        onChange={(e) => handleInputChange('sla', e.target.value)}
                      >
                        <option value="Dev-QA-SLA">Dev-QA-SLA</option>
                        <option value="Prod-SLA">Prod-SLA</option>
                        <option value="Test-SLA">Test-SLA</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Snapshot time</label>
                      <input 
                        type="time"
                        className="form-input"
                        value={formData.snapshotTime}
                        onChange={(e) => handleInputChange('snapshotTime', e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--surface-200)' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--surface-50)', borderBottom: '1px solid var(--surface-200)' }}>
                          <th style={{ 
                            textAlign: 'left', 
                            padding: '12px', 
                            fontSize: '12px', 
                            color: '#1976D2',
                            fontWeight: '550',
                            borderRight: '1px solid var(--surface-200)'
                          }}>
                            Header ↕
                          </th>
                          <th style={{ 
                            textAlign: 'left', 
                            padding: '12px', 
                            fontSize: '12px', 
                            color: '#1976D2',
                            fontWeight: '550',
                            borderRight: '1px solid var(--surface-200)'
                          }}>
                            Header ↕
                          </th>
                          <th style={{ 
                            textAlign: 'left', 
                            padding: '12px', 
                            fontSize: '12px', 
                            color: '#1976D2',
                            fontWeight: '550'
                          }}>
                            Header ↕
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4].map((row) => (
                          <tr key={row} style={{ borderBottom: '1px solid var(--surface-200)' }}>
                            <td style={{ 
                              padding: '12px', 
                              borderRight: '1px solid var(--surface-200)',
                              verticalAlign: 'middle'
                            }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                                <span style={{ color: '#1976D2', fontSize: '13px' }}>Link</span>
                              </div>
                            </td>
                            <td style={{ 
                              padding: '12px', 
                              borderRight: '1px solid var(--surface-200)',
                              fontSize: '13px'
                            }}>
                              Row Title
                            </td>
                            <td style={{ padding: '12px' }}>
                              <button 
                                className="btn btn-secondary" 
                                style={{ 
                                  color: '#1976D2', 
                                  fontSize: '13px',
                                  padding: '4px 8px',
                                  border: 'none',
                                  background: 'none'
                                }}
                              >
                                🗑 Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    backgroundColor: '#E3F2FD', 
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '1px solid #BBDEFB'
                  }}>
                    <span style={{ color: '#1976D2' }}>ℹ️</span>
                    <span className="body-secondary" style={{ color: '#1976D2', fontSize: '13px' }}>
                      Projecting an estimate total count of 71 snapshots with the above configuration.
                    </span>
                    <button style={{ 
                      marginLeft: 'auto', 
                      background: 'none', 
                      border: 'none', 
                      color: '#1976D2',
                      cursor: 'pointer',
                      fontSize: '16px'
                    }}>×</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Summary */}
            <div style={{ flex: '1' }}>
              <div style={{ 
                position: 'sticky', 
                top: '24px',
                backgroundColor: 'var(--surface-0)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--surface-200)'
              }}>
                <h3 className="heading-md" style={{ marginBottom: '8px' }}>Estimated Monthly Price*</h3>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                  $99.99
                </div>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  style={{ 
                    color: '#1976D2', 
                    marginBottom: '24px',
                    border: '1px solid #1976D2',
                    background: 'white'
                  }}
                >
                  View details
                </button>
                
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
                    fontSize: '14px',
                    fontWeight: '550',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onClick={handleSubmit}
                >
                  ➕ Create service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

