import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(); 

//   where does this go from 20.5.4 just over halfway down page doesnt say where it goes
//   {isModalOpen && <Modal currentPhoto={currentPhoto} />}
  const [photos] = useState([
    // all names and categories will need to be changed. Not sure if ill need description this is where I need to 
    // match the category to the image, its by numbers. the images are numbered like an array
    // changed categories from commercial to Projects and it wouldnt render site need to look into that'
    // also need to change commercial to projects in app.js
    // when I change in app.js it still renders page when I change below the page blank It needs to be changed somewhere else
    // needed to change file name to projects. works now 
    // changed categories to photos, ads, 
    // <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />

    {
      name: 'Grocery aisle',
      category: 'projects',
      description:
      // need link to projects here
      // make link....not sure how yet
        '1303construction.com'
    },
    {
      name: 'Grocery booth',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Building exterior',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Restaurant table',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      // changed as a test added pic/ works by number to an array
      name: 'Sunset',
      category: 'projects',
      description:
        'testing to make sure this works'
    },
    {
      name: 'Cat green eyes',
      category: 'photos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green parrot',
      category: 'photos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Yellow macaw',
      category: 'photos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pug smile',
      category: 'photos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pancakes',
      category: 'ads',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Burrito',
      category: 'ads',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Scallop pasta',
      category: 'ads',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Burger',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;