import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

interface BreadCrumbsProps {
    items: Array<{ label: string; link: string }>;
}

const BreadCrumbs = ({ items }: BreadCrumbsProps) => {
    const breadCrumbItems = [
        {
            title: (
                <Link href="/">
                    <HomeOutlined />
                </Link>
            ),
        },
        ...items.map((item) => {
            return {
                title: item.link ? (
                    <Link href={item.link}>{item.label}</Link>
                ) : (
                    <span>{item.label}</span>
                ),
            };
        }),
    ];

    return (
        <Breadcrumb
            items={breadCrumbItems}
            style={{ margin: '16px 0' }}
        ></Breadcrumb>
    );
};

export default BreadCrumbs;
