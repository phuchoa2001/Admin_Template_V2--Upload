import React from 'react';

import Styles from './index.module.css';
import Upload from './Upload';
import UploadSkeleton from './UploadSkeleton';

function RightSide(props) {
    const data = []
    const isLoading = false;

    return (
        <div className={Styles.RightSide}>
            <h3 className="heading-text">Updates</h3>
            <div className={Styles.listUpload}>
                {!isLoading ?
                    data?.data?.data.map((item, index) =>
                        <Upload desc={item.desc} name={item.name} key={item["_id"]} />
                    ) : <>
                        <UploadSkeleton />
                        <UploadSkeleton />
                        <UploadSkeleton />
                        <UploadSkeleton />
                        <UploadSkeleton />
                    </>
                }
            </div>
        </div>
    );
}

export default RightSide;