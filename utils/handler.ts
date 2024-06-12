'use client'

const handleSubmit = async (event: any) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  try {
    let response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
    let res = await response.json();
    console.log(`${res.name} ${res.email} ${res.message}`);
  } catch (error) {
    // Handle error
    console.error('Error submitting form:', error);
  }
};

export { handleSubmit };