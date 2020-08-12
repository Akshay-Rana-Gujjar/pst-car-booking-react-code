import React from 'react';

function Alert(props) {
    return (
        <div>
            <div className="alert alert-dismissible alert-info fade mb-0 show small text-center" role="alert">
                <strong>{props.strongText}</strong> {props.alert}
                <button type="button" className="btn btn-light btn-sm" data-dismiss="alert" aria-label="Close">
                    <span>{props.buttonText}</span>
                </button>
            </div>
        </div>
    )
}

export default Alert;
