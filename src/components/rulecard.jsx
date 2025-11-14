import { useState } from "react";
export default function RuleCard({ rule, children }) {

    const [iscompleted] = useState(Boolean(rule && rule.completed));

    const statusClass = iscompleted ? 'text-green-600' : 'text-black';
   

    const { title, category, description } = rule;

    return (

        <div className={`rounded-lg shadow-xl p-4  max-w-md w-full`}>
            <h2 className="text-xl font-bold mb-2 text-emerald-950 ">{title}</h2>
            <p className=" mb-4  text-emerald-500">{category}</p>
            <div className="text-sm text-gray-500">{description}</div>
            <div>
                {children}
            </div>
            <p className={`mt-4 font-semibold ${statusClass}`}></p>

        </div>

    );



}