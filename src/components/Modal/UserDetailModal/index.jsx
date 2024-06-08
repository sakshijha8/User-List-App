import React from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  HeaderSection
} from "../../../styles/userDetail";

const UserDetailsModal = ({ user, onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <HeaderSection>
          <h2>{user.name}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </HeaderSection>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
      </ModalContent>
    </ModalContainer>
  );
};

export default UserDetailsModal;
