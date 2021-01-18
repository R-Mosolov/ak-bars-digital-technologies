import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../styles/footer.scss';

export default function Header() {
  return (
    <Box mt={5}>
      <nav className="footer">
        <div className="footer__container container-fluid">
          <Typography className="footer__container_author" variant="body1">
            Developed by R. Mosolov
          </Typography>
        </div>
      </nav>
    </Box>
  );
}
