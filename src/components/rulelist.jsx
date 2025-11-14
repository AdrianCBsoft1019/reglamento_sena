import RuleCard from './rulecard.jsx'

const RuleList = ({ rules, onToggleCompliance }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule) => (
                <RuleCard 
                    key={rule.id} 
                    rule={rule} 
                    onToggleCompliance={onToggleCompliance}
                />
            ))}
        </div>
    );
};

export default RuleList;