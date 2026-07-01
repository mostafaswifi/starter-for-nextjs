'use client';

import { useState, useEffect } from 'react';

export default function Home() {
 
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);





  // Update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/put-student/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setFormData({ title: '', description: '' });
        setEditingId(null);
        // fetchItems(); // Uncomment if you have a function to fetch items
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };


  // Edit item (populate form)
//   const editItem = (item) => {
//     setEditingId(item.$id);
//     setFormData({ title: item.title, description: item.description });
//   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD with Appwrite</h1>

      {/* Form */}
      <form onSubmit={ updateItem } className="mb-8">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ title: '', description: '' });
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
      </form>

   
    </div>
  );
}