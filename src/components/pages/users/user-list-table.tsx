import { AdminListUser } from "@/types/user";
import { Panel } from "../dashboard";
import { formatDate } from "@/utils/format/date";

interface UserListTableProps {
    userListData: {
        totalCount: number;
        nextToken: string | null;
        users: AdminListUser[];
    } | undefined;
}

const UserListTable = ({ userListData }: UserListTableProps) => {
    return (
        <Panel style={{ padding: 0, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Montserrat', sans-serif" }}>
                <thead style={{ background: '#E9DCB9' }}>
                    <tr>
                        {['User Name', 'Platform', 'Status', 'Joined', 'Last Active', 'Coupon'].map((heading) => (
                            <th key={heading} style={{ textAlign: 'left', padding: '10px 18px', color: '#26303D', fontSize: 24 / 2.1, fontWeight: 700 }}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {userListData?.users?.map((user: AdminListUser) => (
                        <tr key={user.userId}>
                            <td
                                style={{ padding: '14px 18px', color: '#C7A24C', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 500 }}>
                                {user.userName}
                            </td>
                            <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                                {user.platform || '-'}
                            </td>
                            <td style={{ padding: '14px 18px', borderTop: '1px solid #EFE7D7' }}>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        borderRadius: 7,
                                        padding: '4px 10px',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: user.subscriptionStatus === 'Free' ? '#FF5A3C' : user.subscriptionStatus === 'Trial' ? '#8A8F9D' : '#16A34A',
                                        background: user.subscriptionStatus === 'Free' ? '#FDEBE7' : user.subscriptionStatus === 'Trial' ? '#EEF0F4' : '#DFF5E7',
                                    }}
                                >
                                    {user.subscriptionStatus}
                                </span>
                            </td>
                            <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                                {formatDate(user.joinedAt)}
                            </td>
                            <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                                {formatDate(user.lastActiveAt)}
                            </td>
                            <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                                {user.couponCode || "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Panel>
    )
}

export default UserListTable;