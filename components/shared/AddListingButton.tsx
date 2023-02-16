import * as React from 'react';
import { Link } from 'react-router-dom';

const AddListingButton = () => {
  return (
    <div>
      <Link to="/profile/add_listing">Pridať inzerát</Link>
    </div>
  );
};
export default AddListingButton;
