import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

function TechItem({ tech, onDelete }) {
  return (
    <li className="line-item-style">
      {tech}
      <FaTrash className="icon-trash" type="button" onClick={onDelete}>
        Remover
      </FaTrash>
    </li>
  );
}

TechItem.defaultProps = {
  tech: ""
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
