import { GoldTopBar } from '../../custom-ui/gold-top-bar';
import { useState } from "react";
import GoldBtn from "@/components/custom-ui/gold-btn";
import { Plus, X } from "lucide-react";
import { CouponForm } from '@/types/marketing';



const CouponModal = ({ setShowModal, form, setForm }:
    {
        setShowModal: (val: boolean) => void,
        form: CouponForm,
        setForm: React.Dispatch<React.SetStateAction<CouponForm>>
    }) => {

    const updateForm = (key: keyof CouponForm, val: string) => setForm(f => ({ ...f, [key]: val }));

    return (
        <div className="fixed inset-0 bg-[#18140D]/65 z-[200] flex items-center justify-center backdrop-blur-[3px]">

            <div className="bg-white rounded-[22px] px-9 py-8 w-[500px] shadow-[0_28px_70px_rgba(0,0,0,0.25)] max-h-[92vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-heading text-2xl font-bold text-dark">Create New Coupon</h3>
                    <button onClick={() => setShowModal(false)} className="bg-transparent border-none cursor-pointer text-slate-light"><X size={18} /></button>
                </div>

                <GoldTopBar />
                <div className="grid grid-cols-2 gap-[14px]">
                    <div className="col-span-2">
                        <label className="text-[11px] font-bold text-dark block mb-1.25">
                            Code Name <span className="text-slate-light font-normal">(blank = auto-generate)</span>
                        </label>
                        <input value={form.code} onChange={e => updateForm('code', e.target.value)} placeholder="e.g. ZEST30"
                            className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark" />
                    </div>
                    {([
                        { field: 'type' as keyof CouponForm, label: 'Discount Type', options: ['% off', '$ off', 'Free trial (X days)'] },
                        { field: 'applies' as keyof CouponForm, label: 'Applies To', options: ['Monthly', 'Yearly', 'Both'] },
                    ] as { field: keyof CouponForm; label: string; options: string[] }[]).map(f => (
                        <div key={f.field}>
                            <label className="text-[11px] font-bold text-dark block mb-1.25">{f.label}</label>
                            <select value={form[f.field]} onChange={e => updateForm(f.field, e.target.value)}
                                className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark">
                                {f.options.map(o => <option key={o}>{o}</option>)}
                            </select>
                        </div>
                    ))}
                    <div>
                        <label className="text-[11px] font-bold text-dark block mb-1.25">Value</label>
                        <input value={form.value} onChange={e => updateForm('value', e.target.value)}
                            placeholder={form.type === '% off' ? 'e.g. 30' : form.type === '$ off' ? 'e.g. 10.00' : 'days'}
                            className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark" />
                    </div>
                    {([
                        { field: 'duration' as keyof CouponForm, label: 'Duration', options: ['One-time', 'Recurring — 2 months', 'Recurring — 3 months', 'Recurring — 6 months', 'Forever'] },
                        { field: 'maxUses' as keyof CouponForm, label: 'Max Uses', options: ['1', '5', '10', '25', '50', '100', '250', '500', 'Unlimited'] },
                        { field: 'perUser' as keyof CouponForm, label: 'Per-User Limit', options: ['1', '2', '5', 'Unlimited'] },
                    ] as { field: keyof CouponForm; label: string; options: string[] }[]).map(f => (
                        <div key={f.field}>
                            <label className="text-[11px] font-bold text-dark block mb-1.25">{f.label}</label>
                            <select value={form[f.field]} onChange={e => updateForm(f.field, e.target.value)}
                                className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark">
                                {f.options.map(o => <option key={o}>{o}</option>)}
                            </select>
                        </div>
                    ))}
                    <div className="col-span-2">
                        <label className="text-[11px] font-bold text-dark block mb-1.25">
                            Expiration Date <span className="text-slate-light font-normal">(optional)</span>
                        </label>
                        <input type="date" value={form.expiry} onChange={e => updateForm('expiry', e.target.value)}
                            className="w-full px-[13px] py-[10px] rounded-[10px] border border-border text-[12px] bg-cream text-dark" />
                    </div>
                </div>
                <div className="flex gap-2.5 mt-[22px]">
                    <button onClick={() => setShowModal(false)} className="flex-1 p-[10px] rounded-[10px] border border-border bg-transparent text-[12px] text-slate-light cursor-pointer">Cancel</button>
                    <div className="flex-[2]">
                        <GoldBtn onClick={() => setShowModal(false)} full><Plus size={14} />Create Coupon</GoldBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CouponModal