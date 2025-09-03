import React, { useState } from 'react';

const districtTaluks = {
  ranchi: ['Ranchi Sadar', 'Ormanjhi', 'Kanke'],
  dhanbad: ['Katras', 'Govindpur', 'Baliapur'],
  bokaro: ['Chas', 'Gomia', 'Bermo'],
  giridih: ['Giridih Sadar', 'Tisri', 'Bagodar'],
  hazaribagh: ['Hazaribagh Sadar', 'Barhi', 'Ichak'],
  gumla: ['Gumla Sadar', 'Chainpur', 'Bishunpur'],
  palamu: ['Medininagar', 'Chhatarpur', 'Hussainabad'],
  godda: ['Godda Sadar', 'Pathargama', 'Sundarpahari'],
  'east-singhbhum': ['Jamshedpur', 'Potka', 'Dhalbhumgarh'],
  'west-singhbhum': ['Chaibasa', 'Jagannathpur', 'Manoharpur'],
};

function Grievance() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const taluks = districtTaluks[selectedDistrict] || [];

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginBottom: '1rem',
    color: '#000000',
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a JPG or PNG image.');
    }
  };

  const handleDraftSave = () => {
    alert('Draft saved!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grievance submitted!');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>
        Raise a Grievance
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <input
          type="tel"
          placeholder="Your Phone Number"
          style={inputStyle}
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />

        {/* Problem Type Dropdown */}
        <select style={inputStyle} required>
          <option value="" disabled selected style={{ color: '#000000' }}>
            Select Problem Type
          </option>
          <option value="infrastructure">Infrastructure Issue</option>
          <option value="water">Water Supply</option>
          <option value="electricity">Electricity</option>
          <option value="sanitation">Sanitation</option>
          <option value="other">Other</option>
        </select>

        {/* District Dropdown */}
        <select
          style={inputStyle}
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          required
        >
          <option value="" disabled selected style={{ color: '#000000' }}>
            Select District (Jharkhand)
          </option>
          {Object.keys(districtTaluks).map((districtKey) => (
            <option key={districtKey} value={districtKey}>
              {districtKey.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </option>
          ))}
        </select>

        {/* Taluk Dropdown */}
        <select style={inputStyle} disabled={!selectedDistrict} required>
          <option value="" disabled selected style={{ color: '#000000' }}>
            Select Taluk
          </option>
          {taluks.map((taluk) => (
            <option key={taluk} value={taluk}>
              {taluk}
            </option>
          ))}
        </select>

        {/* Grievance Text */}
        <textarea
          placeholder="Write your grievance here..."
          style={{ ...inputStyle, height: '120px' }}
          required
        ></textarea>

        {/* Upload Box */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <label
            htmlFor="file-upload"
            style={{
              backgroundColor: '#2563eb',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Upload
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".jpg,.jpeg,.png"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <span style={{ fontSize: '0.875rem', color: '#555' }}>
            {selectedFile ? selectedFile.name : 'No file selected'}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#16a34a',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#15803d')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#16a34a')}
          
          >
            Save as Draft
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: '#16a34a',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#15803d')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#16a34a')}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Grievance;