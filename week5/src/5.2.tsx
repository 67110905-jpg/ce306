import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`ชื่อ: ${form.name}\nอีเมล: ${form.email}`);
  };

  const handleClear = () => {
    setForm({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Form Exercise</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>ชื่อ:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="กรอกชื่อของคุณ"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>อีเมล:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="กรอกอีเมลของคุณ"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleSubmit} style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}>Submit</button>
        <button onClick={handleClear} style={{ backgroundColor: 'red', color: 'white' }}>Clear</button>
      </div>
      <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
        <p><strong>ข้อมูลที่กรอก:</strong></p>
        <p>ชื่อ: {form.name || 'ยังไม่ได้กรอก'}</p>
        <p>อีเมล: {form.email || 'ยังไม่ได้กรอก'}</p>
      </div>
    </div>
  );
};

export default UserForm;
