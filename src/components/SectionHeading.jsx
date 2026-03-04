const SectionHeading = ({ title, subtitle }) => (
    <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="h-1 w-12 bg-theme rounded-full"></span>
            {title}
        </h2>
        {subtitle && <p className="mt-2 text-gray-400 font-mono text-sm">{subtitle}</p>}
    </div>
);

export default SectionHeading;