import React, { Component } from 'react';
import FromNhanVien from './FromNhanVien';
import FormSanPham from './FormSanPham';
import WithModel from './WithModal';

const FormModel = WithModel(FromNhanVien);

export default class HOC extends Component {
    render() {
        return (
            <div>
                <h3>Hide order Component</h3>
                <FormModel/>
               
            </div>
        )
    }
}
