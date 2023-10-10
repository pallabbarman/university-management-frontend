import { Button } from 'antd';
import Link from 'next/link';

const ManageStudentPage = () => {
    return (
        <div>
            <h1>Manage student</h1>
            <Link href="/super_admin/manage-student/create">
                <Button type="primary">Create Student</Button>
            </Link>
        </div>
    );
};

export default ManageStudentPage;
