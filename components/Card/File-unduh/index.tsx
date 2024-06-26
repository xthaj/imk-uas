import React from 'react';
import { Card, Row, Col, ConfigProvider } from 'antd';
import { FileOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface FileProps {
    title: string;
    fileSize?: string | null;
    fileLink: string;
    kategori?: string | null;
}

const FileCard: React.FC<FileProps> = ({ title, fileSize, fileLink, kategori }) => {
    return (
        <Link href={fileLink}>
            <ConfigProvider
                theme={{
                    components: {
                        Card: {
                            /* here is your component tokens */
                        },
                    },
                    token: {
                        padding: 4,
                        paddingLG: 4
                    },
                }}
            >
                <Card bordered={true} style={{ border: '1px solid #d9d9d9', borderRadius: 16, marginTop: 4 }}>
                    <div className='flex flex-row justify-between px-2'>
                        <div className='flex items-center'>
                            <FileOutlined style={{ fontSize: '24px', color: 'gray' }} />
                            <Col content='center'>
                                <h2 className='ml-3 text-lg md:text-xl font-normal'>{title}</h2>
                            </Col>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[60px]'>
                            <VerticalAlignBottomOutlined style={{ fontSize: '36px', color: 'gray' }} />
                            <p className='text-sm'>{fileSize}</p>
                        </div>
                    </div>
                    {/* <div className='px-4'>
                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex' }}>
                                <FileOutlined style={{ fontSize: '24px', color: 'gray' }} />
                                <Col content='center'>
                                    <h2 className='ml-3 text-lg md:text-xl font-normal'>{title}</h2>
                                </Col>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <VerticalAlignBottomOutlined style={{ fontSize: '36px', color: 'gray' }} />
                                <p className='text-md'>{fileSize}</p>
                            </div>
                        </Row>
                    </div> */}
                </Card>
            </ConfigProvider>

        </Link>
    );
};

export default FileCard;