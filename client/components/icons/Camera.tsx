import React from "react";

interface CameraIconProps {
	width: string;
	height: string;
}

const CameraIcon = ({ width, height }: CameraIconProps) => {
	return (
		<svg width={width} height={height} viewBox="0 0 68 56" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M61.664 11.8158H46.2819L44.6125 5.13768C43.8923 2.25683 41.0019 0 38.0323 0L29.1704 0C26.2008 0 23.3103 2.25683 22.59 5.13768L20.9207 11.8158H19.2008V8.49264C19.2008 7.88088 18.7049 7.38491 18.093 7.38491H9.23113C8.61922 7.38491 8.1234 7.88088 8.1234 8.49264V11.8158H5.53868C2.48458 11.8158 0 14.3006 0 17.3545L0 49.8481C0 52.9021 2.48458 55.3868 5.53868 55.3868H61.664C64.7181 55.3868 67.2026 52.9021 67.2026 49.8481V17.3545C67.2026 14.3006 64.7181 11.8158 61.664 11.8158ZM10.3389 9.60038H16.9853V11.8158H10.3389V9.60038ZM5.53868 14.0313H21.7855C22.2937 14.0313 22.7368 13.6854 22.8601 13.1922L24.7394 5.675C25.2082 3.79983 27.2373 2.21547 29.1704 2.21547H38.0323C39.9653 2.21547 41.9944 3.79983 42.4632 5.675L44.3425 13.1922C44.4658 13.6854 44.9089 14.0313 45.4172 14.0313H61.664C63.4963 14.0313 64.9872 15.5222 64.9872 17.3545V20.6777H45.1708C42.0982 17.9242 38.0423 16.2468 33.6013 16.2468C29.1603 16.2468 25.1045 17.9242 22.0318 20.6777H2.21547V17.3545C2.21547 15.5222 3.70634 14.0313 5.53868 14.0313ZM33.6013 48.7404C25.2536 48.7404 18.4623 41.9491 18.4623 33.6013C18.4623 25.2536 25.2536 18.4623 33.6013 18.4623C41.9491 18.4623 48.7404 25.2536 48.7404 33.6013C48.7404 41.9491 41.9491 48.7404 33.6013 48.7404ZM2.21547 22.8932H19.9531C18.4363 24.8223 17.3201 27.08 16.728 29.5396H14.6686C12.4291 29.5396 10.6069 31.3616 10.6069 33.6013C10.6069 35.841 12.4291 37.663 14.6686 37.663H16.7278C17.32 40.1226 18.4361 42.3803 19.953 44.3094H2.21547V22.8932ZM16.3452 35.4475H14.6688C13.6507 35.4475 12.8226 34.6194 12.8226 33.6013C12.8226 32.5832 13.6507 31.7551 14.6688 31.7551H16.3452C16.2806 32.3618 16.2468 32.9777 16.2468 33.6013C16.2468 34.2249 16.2806 34.8408 16.3452 35.4475ZM61.664 53.1713H5.53868C3.70634 53.1713 2.21547 51.6805 2.21547 49.8481V46.5249H22.0318C25.1044 49.2784 29.1603 50.9558 33.6013 50.9558C38.0423 50.9558 42.0981 49.2784 45.1708 46.5249H52.8021C53.414 46.5249 53.9098 46.0289 53.9098 45.4172C53.9098 44.8054 53.414 44.3094 52.8021 44.3094H47.2495C49.5703 41.358 50.9558 37.6385 50.9558 33.6013C50.9558 29.5641 49.5703 25.8447 47.2495 22.8932H64.9872V44.3094H57.233C56.6211 44.3094 56.1253 44.8054 56.1253 45.4172C56.1253 46.0289 56.6211 46.5249 57.233 46.5249H64.9872V49.8481C64.9872 51.6805 63.4963 53.1713 61.664 53.1713Z"
				fill="#69C9FF"
				fillOpacity="0.41"
			/>
			<path
				d="M26.3529 14.0313H40.8497C41.1909 14.0313 41.5129 13.8742 41.7228 13.6054C41.9328 13.3366 42.0071 12.9859 41.9244 12.6549L40.0783 5.27002C39.955 4.77686 39.5119 4.43095 39.0037 4.43095H28.199C27.6907 4.43095 27.2476 4.77686 27.1243 5.27002L25.2782 12.6549C25.1955 12.9858 25.2698 13.3364 25.4798 13.6054C25.6897 13.8742 26.0117 14.0313 26.3529 14.0313ZM29.0637 6.64642H38.1387L39.431 11.8159H27.7715L29.0637 6.64642Z"
				fill="#69C9FF"
				fillOpacity="0.41"
			/>
			<path
				d="M33.6013 22.1547C27.2897 22.1547 22.1547 27.2896 22.1547 33.6013C22.1547 39.9131 27.2897 45.0479 33.6013 45.0479C39.9129 45.0479 45.0479 39.9131 45.0479 33.6013C45.0479 27.2896 39.9129 22.1547 33.6013 22.1547ZM33.6013 42.8325C28.5112 42.8325 24.3702 38.6914 24.3702 33.6013C24.3702 28.5112 28.5112 24.3702 33.6013 24.3702C38.6914 24.3702 42.8324 28.5112 42.8324 33.6013C42.8324 38.6914 38.6914 42.8325 33.6013 42.8325Z"
				fill="#69C9FF"
				fillOpacity="0.41"
			/>
			<path
				d="M40.06 30.8652C39.8218 30.3015 39.1713 30.0378 38.6086 30.2758C38.0449 30.5138 37.781 31.1636 38.0191 31.7272C38.7849 33.54 38.3832 35.608 36.9955 36.9954C36.0908 37.9002 34.8854 38.3986 33.6014 38.3986C32.3175 38.3986 31.1121 37.9002 30.2073 36.9954C29.7746 36.5628 29.0733 36.5628 28.6407 36.9954C28.2081 37.428 28.2081 38.1293 28.6407 38.5619C29.9641 39.8851 31.7258 40.614 33.6016 40.614C35.4772 40.614 37.2392 39.8851 38.5625 38.5619C40.5902 36.534 41.1782 33.5129 40.06 30.8652Z"
				fill="#69C9FF"
				fillOpacity="0.41"
			/>
			<path
				d="M29.4238 30.5316C29.7073 30.5316 29.9908 30.4234 30.2072 30.2071C31.5946 28.8197 33.6622 28.4179 35.4755 29.1837C36.0388 29.4215 36.689 29.1578 36.9269 28.5942C37.1648 28.0306 36.9009 27.3807 36.3374 27.1428C33.6896 26.0247 30.6688 26.6124 28.6406 28.6406C28.208 29.0732 28.208 29.7746 28.6406 30.2072C28.8568 30.4234 29.1404 30.5316 29.4238 30.5316Z"
				fill="#69C9FF"
				fillOpacity="0.41"
			/>
		</svg>
	);
};

export default CameraIcon;
