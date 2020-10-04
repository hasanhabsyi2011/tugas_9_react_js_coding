import React from 'react';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

function PageButton() {
  const munculPopover = <Popover title="informasi">Website ini dibuat untuk memudahkan
  dalam pencarian informasi terkini tentang berita olahraga</Popover>


  return (
    <>
          <OverlayTrigger
                  trigger="click"
                  placement ="right"
                  overlay={munculPopover}>
                  <Button variant="success">Informasi</Button>
          </OverlayTrigger>{' '}
    </>
  )
 }

export default PageButton;
