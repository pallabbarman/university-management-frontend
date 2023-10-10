'use client';

import BreadCrumbs from '@/components/BreadCrumbs';
import { getUserInfo } from '@/services/auth';

const UserPage = () => {
    const { role } = getUserInfo() as any;

    return (
        <div>
            <BreadCrumbs
                items={[
                    {
                        label: `${role}`,
                        link: `/${role}`,
                    },
                ]}
            ></BreadCrumbs>
            <h1>User page</h1>
        </div>
    );
};

export default UserPage;
