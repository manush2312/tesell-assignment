import React, { useState } from 'react'
import { Radio, RadioGroup } from '../components/ui/radio'
import { Checkbox } from '../components/ui/checkbox'
import { Trash2 } from 'lucide-react'
import { ChevronsUpDown } from 'lucide-react'
const ServiceForm = () => {
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

    const [tableData, setTableData] = useState([
        { id: 1, link: 'Link', title: 'Row Title' },
        { id: 2, link: 'Link', title: 'Row Title' },
        { id: 3, link: 'Link', title: 'Row Title' }
    ])
    const [selectAll, setSelectAll] = useState(false)
    const [selectedRows, setSelectedRows] = useState([])

    const handleInputChange = (field, value) =>
        setFormData(prev => ({ ...prev, [field]: value }))
    const handleTagRemove = index =>
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter((_, i) => i !== index)
        }))
    const handleRowSelect = (id, checked) =>
        setSelectedRows(prev => (checked ? [...prev, id] : prev.filter(r => r !== id)))
    const handleSelectAll = checked => {
        setSelectAll(checked)
        setSelectedRows(checked ? tableData.map(r => r.id) : [])
    }
    const handleDeleteRow = id =>
        setTableData(prev => prev.filter(r => r.id !== id))

    // Style definitions
    const styles = {
        container: { padding: '0px' },
        card: { backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '14px', marginBottom: '15px' },
        heading: { fontSize: '20px', lineHeight: '24px', letterSpacing: '-0.2px', fontWeight: 600, color: '#111827', marginBottom: '8px' },
        headingengine: { fontSize: '15px', lineHeight: '22px', letterSpacing: '-0.1px', fontWeight: 600, color: '#111827', marginBottom: '4px' },
        subtext: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', color: '#6B7280', marginBottom: '24px' },
        group: { marginBottom: '16px' },
        textarea: {
            width: '85%',
            padding: '10px 12px',
            border: '1px solid #D1D5DB',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#111827',
            minHeight: '90px',
            resize: "none",
            fontFamily: 'inherit',
            lineHeight: '20px',
            letterSpacing: '0px'
        },
        label: { fontSize: '13px', lineHeight: '20px', letterSpacing: '0px', fontWeight: 500, color: '#111827', marginBottom: '8px', display: 'block' },
        labeltime: { fontSize: '13px', lineHeight: '16px', letterSpacing: '0px', fontWeight: 500, color: '#111827', marginBottom: '8px', display: 'block' },
        input: { width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '14px', color: '#111827' },
        timeInput: { width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '14px', lineHeight: '16px', letterSpacing: '0px', color: '#111827' },
        selectservice: { width: '40%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '14px', color: '#111827', appearance: 'none' },
        select: { width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '14px', color: '#111827', appearance: 'none' },
        selectLargeFont: { width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', color: '#111827', appearance: 'none' },
        checkboxLabel: { fontSize: '14px', color: '#111827', display: 'inline-flex', alignItems: 'center' },
        tagInputContainer: { display: 'flex', alignItems: 'center', border: '1px solid #D1D5DB', borderRadius: '4px', padding: '8px 10px', marginBottom: '8px', width: '50%' },
        tagInput: { flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: '#6B7280' },
        tagSeparator: { margin: '0 8px', color: '#6B7280', fontSize: '14px' },
        tagList: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
        tagChip: { display: 'inline-flex', alignItems: 'center', backgroundColor: '#F3F4F6', padding: '4px 8px', fontSize: '12px', lineHeight: '16px', letterSpacing: '0px', color: '#111827' },
        tagRemove: { background: 'none', border: 'none', marginLeft: '4px', cursor: 'pointer', fontSize: '14px', color: '#6B7280' },
        radioGroup: { display: 'flex', gap: '0.5rem', marginBottom: '16px', marginTop: "1.7rem", flexDirection: "column" },
        radioItem: { display: 'inline-flex', alignItems: 'center', fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', color: '#111827' },
        flexRow: { display: 'flex', gap: '16px', marginBottom: '16px' },
        tableContainer: { marginTop: '24px', width: '100%', border: "2px solid #EEF1F6", borderRadius: "8px", z: "10" },
        table: { width: '100%', borderCollapse: 'collapse', borderRadius: "4px" },
        th: { padding: '12px', textAlign: 'left', fontWeight: 600, fontSize: '14px', color: '#1565c0', backgroundColor: '#EEF1F6' },
        thLast: { padding: '12px', textAlign: 'right', fontWeight: 600, fontSize: '14px', color: '#1565c0', backgroundColor: '#EEF1F6' },
        td: { padding: '12px', textAlign: 'left', fontSize: '14px', color: '#111827', borderTop: '1px solid #E8EAED' },
        tdLast: { padding: '12px', textAlign: 'right', fontSize: '14px', color: '#111827', borderTop: '1px solid #E8EAED' },
        actionBtn: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#1565c0', display: "flex", alignItems: "end", width: "100%", justifyContent: "end", gap: "2px" },
        infoBanner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#F1F3F4', borderRadius: '0 0 8px 8px', marginTop: '24px' },
        infoText: { fontSize: '12px', color: '#1976D2' }
    }

    return (
        <div style={styles.container}>
            {/* Service Details Card */}
            <div style={styles.card}>
                <p style={styles.heading}>Service Details</p>
                <p style={styles.subtext}>Service Name, Service Description, Software Release</p>
                <div style={styles.group}>
                    <label style={styles.label}>Service Name</label>
                    <select style={styles.selectservice} value={formData.serviceName} onChange={e => handleInputChange('serviceName', e.target.value)}>
                        <option>oracle_09_2023</option><option>oracle_10_2023</option><option>oracle_11_2023</option><option>oracle_12_2023</option>
                    </select>
                </div>
                <div style={styles.group}>
                    <label style={styles.label}>Description (optional)</label>
                    <textarea
                        className="form-textarea"
                        style={styles.textarea}
                        placeholder="Add a description"
                        value={formData.description}
                        onChange={e => handleInputChange('description', e.target.value)}
                    />
                </div>
                {/* Tags Input */}
                <div style={styles.group}>
                    <label style={styles.label}>Tags</label>
                    <div style={styles.tagInputContainer}>
                        <input type="text" placeholder="Key" style={styles.tagInput} />
                        <span style={styles.tagSeparator}>:</span>
                        <input type="text" placeholder="Value" style={styles.tagInput} />
                    </div>
                    <div style={styles.tagList}>
                        {formData.tags.map((tag, i) => (
                            <span key={i} style={styles.tagChip}>
                                {tag.key} : {tag.value}
                                <button type="button" onClick={() => handleTagRemove(i)} style={styles.tagRemove}>×</button>
                            </span>
                        ))}
                    </div>
                </div>
                <h2 style={{ ...styles.headingengine, marginTop: '12px' }}>Engine configuration</h2>
                <p style={styles.subtext}>Adjustable parameters, performance optimization, fine-tuning options</p>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={styles.label}>Software Release</label>
                        <select style={styles.select} value={formData.softwareRelease} onChange={e => handleInputChange('softwareRelease', e.target.value)}>
                            <option>Oracle 21c</option><option>Oracle 19c</option><option>Oracle 18c</option>
                        </select>
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={styles.label}>Version</label>
                        <select style={styles.select} value={formData.version} onChange={e => handleInputChange('version', e.target.value)}>
                            <option>21.0.0.0</option><option>19.0.0.0</option><option>18.0.0.0</option>
                        </select>
                    </div>
                </div>
                <div style={styles.group}>
                    <Checkbox
                        id="containerDatabase"
                        checked={formData.containerDatabase}
                        onChange={(checked) => handleInputChange('containerDatabase', checked)}
                    >
                        Create as a Container Database
                    </Checkbox>
                </div>
            </div>

            {/* Additional Settings Card */}
            <div style={styles.card}>
                <h2 style={{ ...styles.heading, fontSize: '15px', marginBottom: '2px' }}>Additional settings</h2>
                <p style={{ ...styles.subtext, fontSize: '13px' }}>Maintenance Window, Availability Machine</p>

                <div style={styles.group}>
                    <label style={{ ...styles.label, fontSize: '13px', marginBottom: '0px' }}>Maintenance Window</label>
                    <p style={{ ...styles.subtext, marginBottom: '8px', fontSize: '10px' }}>Describing what maintenance window is</p>
                    <div style={styles.radioGroup}>
                        <label style={{ ...styles.label, fontSize: '13px', marginBottom: '0px' }}>Window Preference</label>
                        <RadioGroup
                            name="windowPreference"
                            value={formData.windowPreference}
                            onChange={(value) => handleInputChange('windowPreference', value)}
                            direction="horizontal"
                            gap="2rem"
                        >
                            <Radio id="noPreference" value="noPreference">
                                No Preferences
                            </Radio>
                            <Radio id="select" value="select">
                                Select Window
                            </Radio>
                        </RadioGroup>
                    </div>

                    {formData.windowPreference === 'select' && (
                        <>
                            {/* 3-column grid for day, time, duration */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '16px',
                                    marginBottom: '16px',
                                }}
                            >
                                <div>
                                    <label style={styles.label}>Start day</label>
                                    <select
                                        style={styles.selectLargeFont}   // full-width of its 1fr cell
                                        value={formData.startDay}
                                        onChange={e => handleInputChange('startDay', e.target.value)}
                                    >
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={styles.label}>Start time</label>
                                    <input
                                        type="time"
                                        style={styles.timeInput}       // also full-width of its 1fr cell
                                        value={formData.startTime}
                                        onChange={e => handleInputChange('startTime', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label style={styles.label}>Duration</label>
                                    <select
                                        style={styles.selectLargeFont}   // full-width of its 1fr cell
                                        value={formData.duration}
                                        onChange={e => handleInputChange('duration', e.target.value)}
                                    >
                                        <option value="0.5">0.5</option>
                                        <option value="1.0">1.0</option>
                                        <option value="2.0">2.0</option>
                                        <option value="4.0">4.0</option>
                                    </select>
                                </div>
                            </div>

                            <div style={styles.group}>
                                <Checkbox
                                    id="autoMinorUpdate"
                                    checked={formData.autoMinorUpdate}
                                    onChange={(checked) => handleInputChange('autoMinorUpdate', checked)}
                                >
                                    Enable auto minor version update
                                </Checkbox>
                            </div>
                        </>
                    )}

                </div>

                <h2 style={{ ...styles.heading, marginTop: '24px' }}>Availability Machine Preferences</h2>
                <p style={styles.subtext}>Here you can define your data protection SLA and schedule. Once the database is created, define availability and access policies in the Availability Machine app.</p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1 }}>
                        <label style={styles.label}>SLA</label>
                        <select style={styles.select} value={formData.sla} onChange={e => handleInputChange('sla', e.target.value)}>
                            <option>Dev-QA-SLA</option><option>Prod-SLA</option>
                        </select>
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={styles.label}>Snapshot time</label>
                        <input type="time" style={styles.input} value={formData.snapshotTime} onChange={e => handleInputChange('snapshotTime', e.target.value)} />
                    </div>
                </div>

                {/* Table */}
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>
                                    <Checkbox
                                        id="selectAll"
                                        checked={selectAll}
                                        onChange={(checked) => handleSelectAll(checked)}
                                    />
                                </th>
                                <th style={styles.th}>
                                    <div className="" styles={{ display: "flex", position: "absolute", alignItems: "center", justifyContent: "center" }}>
                                        Header
                                        <div className="" style={{ display: "inline", position: "relative", top: "2px", right: "-4px" }} >
                                            <ChevronsUpDown size={14} color="#9CA3AF" />
                                        </div>

                                    </div>
                                </th>
                                <th style={styles.th}>
                                    <div className="" styles={{ display: "flex", position: "absolute", alignItems: "center", justifyContent: "center" }}>
                                        Header
                                        <div className="" style={{ display: "inline", position: "relative", top: "2px", right: "-4px" }} >
                                            <ChevronsUpDown size={14} color="#9CA3AF" />
                                        </div>

                                    </div>
                                </th>
                                <th style={styles.thLast}>
                                    <div className="" styles={{ display: "flex", position: "absolute", alignItems: "center", justifyContent: "center" }}>
                                        Header
                                        <div className="" style={{ display: "inline", position: "relative", top: "2px", right: "-4px" }} >
                                            <ChevronsUpDown size={14} color="#9CA3AF" />
                                        </div>

                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map(r => (
                                <tr key={r.id}>
                                    <td style={styles.td}>
                                        <Checkbox
                                            id={`row-${r.id}`}
                                            checked={selectedRows.includes(r.id)}
                                            onChange={(checked) => handleRowSelect(r.id, checked)}
                                        />
                                    </td>
                                    <td style={styles.td}><a href={r.link} style={{ color: '#1976D2', fontSize: '14px', textDecoration: "none" }}>{r.link}</a></td>
                                    <td style={styles.td}>{r.title}</td>
                                    <td style={{ ...styles.td, textAlign: 'right' }}><button onClick={() => handleDeleteRow(r.id)} style={styles.actionBtn}><Trash2 size={18} /> Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Info banner */}
                <div style={styles.infoBanner}>
                    <span style={styles.infoText}>Projecting an estimated total count of <strong style={{ color: '#111827' }}>71</strong> snapshots with the above configuration.</span>
                    <button aria-label="Close info" style={styles.actionBtn}>&times;</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceForm
