import React, { Component } from 'react';
import * as msg from './../constants/Message'; 

class CartItem extends Component {

    render() {

        var {item} = this.props;
        var {quantity} = item;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>${item.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-sm btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-dark waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                        >
                            <i class="fa fa-minus"></i>
                        </label>
                        <label 
                            className="btn btn-sm btn-dark"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                        >
                            <i class="fa fa-plus"></i>
                        </label>
                    </div>
                </td>
                <td>${this.showSubTotal(item.product.price, item.quantity)}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-dark waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        <i class="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        );
    }


    onDelete = (product) => {
        var {onDeleteProduct, onChangeMessage} = this.props;
        onDeleteProduct(product);
        onChangeMessage(msg.MSG_DELETE_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0){
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(msg.MSG_UPDATE_SUCCESS);
        }
    }
}

export default CartItem;
