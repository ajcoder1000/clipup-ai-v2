// Clip Up AI - MVP Web App (PWA Style)
import React, { useState } from 'react';

export default function ClipUpApp() {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [faceShape, setFaceShape] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFaceShape('oval'); // placeholder for now
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll keep you updated at ${email}`);
    setEmail('');
  };

  const hairstyleSuggestions = {
    oval: [
      {
        title: 'Classic Pompadour',
        img: 'https://fashionuer.com/wp-content/uploads/2023/09/Classic-Pompadour-Timeless-Elegance-.jpg'
      },
      {
        title: 'Undercut',
        img: 'https://fashionuer.com/wp-content/uploads/2023/09/Undercut-Edgy-Appeal-.jpg'
      },
      {
        title: 'Crew Cut',
        img: 'https://fashionuer.com/wp-content/uploads/2023/09/Crew-Cut-Clean-and-Neat-.jpg'
      },
      {
        title: 'Side Swept Bangs',
        img: 'https://fashionuer.com/wp-content/uploads/2023/09/Side-Swept-Bangs-Laid-Back-Charm-.jpg'
      },
      {
        title: 'Textured Quiff',
        img: 'https://fashionuer.com/wp-content/uploads/2023/09/Textured-Quiff-Modern-Sophistication-.jpg'
      }
    ],
    round: [
      {
        title: 'Tapered Fade with Volume',
        img: 'https://lh3.googleusercontent.com/cnO28qKNVBZa6Gw8S8R8Q37xzDZm9Es5_NLPNGeCIDqqskz8qSw-oRMHvfyBYZLxrXvASwhemUGY3FS6OtWLfLyExYvd80eUg0RGfqSdvkA7D7aBI7ZX3vLb042OJrj7Du0LxEBBEO2n2iKEPPi3fBM'
      },
      {
        title: 'Undercut with Comb Over',
        img: 'https://lh3.googleusercontent.com/GB37ONhhv_WSlnlmYco335HPnokl7qeFJIW8joIh2cLyENY_0AOEBj043ZDUtPmM8nlcg75jOz3-0CoKOLpWadNMzUpK459-nzb4vq6WEJaP12LE7PwqxKZDj8Nkjn3idVkSMr1P0qon6ng9bDB0mho'
      },
      {
        title: 'Messy Fringe',
        img: 'https://lh6.googleusercontent.com/_jfTQxy9WCz_8ec6IEqpxULceDssEkALxiF1CUeJbL2GUaKj5nO1rJ-m5BROcrOOQiCs-CsISwd0J2ZcKGO8VBQnhy5K5ilAGmTW3-nz9zai6DB2r8gg3Mewh4ZZsFILw4s4IHdFs98sDBunO9UH_mM'
      },
      {
        title: 'Classic Taper',
        img: 'https://lh5.googleusercontent.com/d_5Q6AKzYu8kj1Z5AjUm0i7nI-vwM1Kg_LWLXG2Dbk4VfYQoPNQIpw_gT8r3G8hdninYaKN1CbXVuo0hNedhd3UYvJnrSa2o7S1IKg-0wiUPhpszTz5h8T2AapCOasxD2itIMoEDKY9N68V1P6To0jc'
      },
      {
        title: 'Short Sides with Brush Up',
        img: 'https://lh6.googleusercontent.com/nxSCPtpJzBUfpSG-SktZRofzO5dfiygnlS882CWQ5p-6EKKVoOkt4Gz-dM7X2rFc2QUch1OEH5ft3jNmGD8cN9Gg0Uxnw4EPwgDia2oZs1RmX4q9jBCSWVlhDZU8zJe5LD8mUlOYSjbYHnQAEDnizYM'
      }
    ]
    // ... (other shapes truncated for this zip)
  };

  return (
    <div className='min-h-screen bg-white text-center p-6 font-sans text-black'>
      <h1 className='text-3xl font-bold mb-2'>Find Your Best Haircut — Instantly</h1>
      <p className='text-gray-600 mb-6'>Upload a selfie and let Clip Up AI suggest the perfect style for your face.</p>

      <input type='file' accept='image/*' onChange={handleImageUpload} className='mb-4' />
      {image && (
        <div className='mb-6'>
          <img src={image} alt='Uploaded' className='mx-auto w-40 h-40 object-cover rounded-full' />
          <p className='mt-2 text-sm text-gray-500'>(Face shape: {faceShape})</p>
        </div>
      )}

      {faceShape && hairstyleSuggestions[faceShape]?.length > 0 && (
        <div>
          <h2 className='text-xl font-semibold mb-2'>Recommended Styles</h2>
          <div className='flex flex-col items-center gap-4'>
            {hairstyleSuggestions[faceShape].map((style, index) => (
              <div key={index} className='max-w-xs'>
                <img src={style.img} alt={style.title} className='rounded shadow-md' />
                <p className='mt-1 font-medium'>{style.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleEmailSubmit} className='mt-8'>
        <p className='mb-2'>Want exclusive styles + updates from Clip Up AI?</p>
        <input
          type='email'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-2 rounded w-64'
          required
        />
        <button type='submit' className='ml-2 bg-black text-white px-4 py-2 rounded'>
          Get Early Access
        </button>
      </form>
    </div>
  );
}
