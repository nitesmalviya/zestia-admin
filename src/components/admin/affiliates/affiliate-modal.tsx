import GoldBtn from "@/components/custom-ui/gold-btn";
import { GoldTopBar } from "@/components/custom-ui/gold-top-bar"
import { UserPlus, X } from "lucide-react";
import { useState } from "react";
import { AffiliateForm } from "@/types/marketing";

const AffiliateModal = ({ setShowAdd, setDetail, TierBadge }: { setShowAdd: (value: boolean) => void, setDetail: (value: any) => void, TierBadge: ({ tier }: { tier: string }) => React.JSX.Element }) => {
    const [newForm, setNewForm] = useState<AffiliateForm>({ name: '', email: '', handle: '', type: 'Influencer', commissionRate: '15' });
    return (
        <div className="fixed inset-0 bg-[#18140D]/65 z-[200] flex items-center justify-center backdrop-blur-[3px]">

            <div className="bg-white rounded-[22px] px-9 py-8 w-[480px] shadow-[0_28px_70px_rgba(0,0,0,0.25)] "
                onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-heading text-2xl font-bold text-dark">Add New Affiliate</h3>
                    <button onClick={() => setShowAdd(false)} className="bg-transparent border-none cursor-pointer text-slate-light"><X size={18} /></button>
                </div>
                <GoldTopBar />
                <div className="grid grid-cols-2 gap-[14px]">
                    {[
                        { f: 'name' as keyof AffiliateForm, l: 'Full Name', p: 'e.g. Jessica Moore', col: '1/-1' },
                        { f: 'email' as keyof AffiliateForm, l: 'Email Address', p: 'e.g. jessica@example.com', col: '1/-1' },
                        { f: 'handle' as keyof AffiliateForm, l: 'Social Handle / Website', p: '@handle or https://…', col: undefined },
                    ].map(x => (
                        <div key={x.f as string} className={x.col === '1/-1' ? 'col-span-2' : ''}>
                            <label className="text-[11px] font-bold text-dark block mb-1.25">{x.l}</label>
                            <input value={newForm[x.f]} onChange={e => setNewForm({ ...newForm, [x.f]: e.target.value })}
                                placeholder={x.p} className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark" />
                        </div>
                    ))}
                    <div>
                        <label className="text-[11px] font-bold text-dark block mb-1.25">Affiliate Type</label>
                        <select value={newForm.type} onChange={e => setNewForm({ ...newForm, type: e.target.value })}
                            className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark">
                            {['Influencer', 'Podcast', 'Coach', 'Brand', 'Creator', 'Other'].map(o => <option key={o}>{o}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="text-[11px] font-bold text-dark block mb-1.25">Starting Commission Rate</label>
                        <select value={newForm.commissionRate} onChange={e => setNewForm({ ...newForm, commissionRate: e.target.value })}
                            className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark">
                            {['10', '15', '20', '25', '30'].map(o => <option key={o}>{o}%</option>)}
                        </select>
                    </div>
                    <div className="col-span-2 bg-gold-ghost rounded-[10px] px-[14px] py-[11px] border border-border text-[11px] text-gold-dark leading-[1.6]">
                        <b>Auto-generated on save:</b> unique referral code, tracking link, and affiliate dashboard invite email.
                    </div>
                </div>
                <div className="flex gap-2.5 mt-5">
                    <button onClick={() => setShowAdd(false)} className="flex-1 p-[10px] rounded-[10px] border border-border bg-transparent text-[12px] text-slate-light cursor-pointer">Cancel</button>
                    <div className="flex-[2]">
                        <GoldBtn onClick={() => setShowAdd(false)} full><UserPlus size={14} />Add Affiliate & Send Invite</GoldBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliateModal