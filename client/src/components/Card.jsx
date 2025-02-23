// src/components/DriverCard.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/Context';
import Modal from 'react-modal';

const DriverCard = ({ driver }) => {
  const totalPrice = parseFloat(driver.car.price) + parseFloat(driver.driverPrice);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = { ...driver, totalPrice };
    addToCart(item);
    closeModal();
    navigate('/carCart');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <img src={`/${driver.image}`} alt={driver.fullName} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-4">{driver.fullName}</h2>
      <p className="text-gray-600 text-center">{driver.phoneNumber}</p>
      <p className="text-gray-600 text-center">{driver.address}</p>
      <p className="text-gray-600 text-center">{driver.cnic}</p>
      <p className="text-gray-600 text-center">Driver Price: ${driver.driverPrice}</p>
      <h3 className="text-lg font-semibold mt-4">Car Information:</h3>
      <img src={`/${driver.car.image}`} alt={driver.car.carName} className="w-32 h-32 rounded-full mx-auto" />
      <p className="text-gray-600">Name: {driver.car.carName}</p>
      <p className="text-gray-600">Model: {driver.car.carModel}</p>
      <p className="text-gray-600">Doors: {driver.car.doors}</p>
      <p className="text-gray-600">Seats: {driver.car.seats}</p>
      <p className="text-gray-600">Transmission: {driver.car.transmission}</p>
      <p className="text-gray-600">AC: {driver.car.ac ? 'Yes' : 'No'}</p>
      <p className="text-gray-600">Category: {driver.car.category}</p>
      <p className="text-gray-600">Price: ${driver.car.price}</p>
      <p className="text-gray-600">Days: {driver.car.days}</p>
      <p className="text-gray-600">Theft Protection: {driver.car.theftProtection ? 'Yes' : 'No'}</p>
      <p className="text-gray-600">Clean: {driver.car.clean}</p>
      <p className="text-gray-600">Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={openModal} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Book me</button>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Chat</button>
      
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Car Preview</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="flex">
                <img src={`/${driver.car.image}`} alt={driver.car.carName} className="w-1/3 h-48 object-cover" />
                <div className="w-2/3 pl-4">
                  <h3 className="text-xl font-bold">{driver.car.carName}</h3>
                  <p className="text-gray-600">{driver.car.carModel}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-blue-500 font-semibold mr-2">
                      <i className="fas fa-door-closed"></i> {driver.car.doors}
                    </span>
                    <span className="text-blue-500 font-semibold mr-2">
                      <i className="fas fa-chair"></i> {driver.car.seats}
                    </span>
                    <span className="text-blue-500 font-semibold mr-2">
                      {driver.car.transmission === 'Manual' ? 'Manual' : 'Automatic'}
                    </span>
                    <span className="text-blue-500 font-semibold">
                      {driver.car.ac ? 'AC' : 'Non-AC'}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="bg-blue-100 text-blue-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{driver.car.category}</span>
                    <span className="bg-green-100 text-green-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Theft Protection</span>
                    <span className="bg-purple-100 text-purple-500 text-xs font-semibold px-2.5 py-0.5 rounded">Clean Interior/Exterior</span>
                  </div>
                  <p className="mt-4 text-gray-600">Days: {driver.car.days}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-bold">Features</h4>
                <ul className="list-disc pl-5 mt-2">
                  <li>Theft Protection</li>
                  <li>Clean Interior/Exterior</li>
                  <li>Cancellation Policies</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-900 font-bold text-xl">Total Rs {totalPrice.toFixed(2)}</span>
                <button onClick={handleAddToCart} className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600">Add to Cart</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DriverCard;
