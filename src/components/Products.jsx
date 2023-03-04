import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';

function Products(props) {
    return (
        <div className='products col-md-8 mx-auto d-flex align-items-center justify-content-evenly' id="products">
            <div className="product align-items-center justify-content-evenly">
                <ExtensionIcon style={{fontSize: '4rem'}} />
                <div className="product-details">
                    <h3><b>Bio</b>nic <b>Fon</b>t <b>Plu</b>gin</h3>
                    <p><b>Th</b>is <b>plu</b>gin <b>is</b> <b>pen</b>ding <b>rev</b>iew <b>via</b> <b>the</b> <b>chr</b>ome <b>web</b>store</p>
                    <p><a href="/blog/5b21ca3eeb7f6fbccd471815">Learn More</a></p>
                </div>
            </div>
            <div className="product-download align-items-center justify-content-evenly">
                <h4>Available For: </h4>
                <p>&bull; Chrome</p>
                <button type="button" className="btn" disabled>Download</button>
            </div>
        </div>
    );
}

export default Products; 