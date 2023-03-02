import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';

function Products(props) {
    return (
        <div className='products col-md-8 mx-auto'>
            <div className="product">
                <ExtensionIcon style={{fontSize: '4rem'}} />
                <div className="product-details">
                    <h3>Bionic Font Plugin</h3>
                    <p><a href="/blog/5b21ca3eeb7f6fbccd471815">Learn More</a></p>
                </div>
            </div>
            <div className="product-download">
                <h4>Available For: </h4>
                <p>&bull; Chrome</p>
                <button type="button" className="btn">Download</button>
            </div>
        </div>
    );
}

export default Products; 