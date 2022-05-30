import PropTypes from "prop-types";
import "./Book.scss";

const Book = ({ id, title, details }) => {
  return (
    <div>
      <li>
        <table>
          <thead>
            <tr>
              <th>
                {id} - {title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <dfn>{details}</dfn>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  details: PropTypes.string
};

export default Book;
