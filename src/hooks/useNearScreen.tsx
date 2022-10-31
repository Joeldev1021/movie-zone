import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';

interface Props {
	target: MutableRefObject<HTMLDivElement | null>;
}

export default function useNearScreen({ target }: Props) {
	const [entries, setEntries] = useState<IntersectionObserverEntry>();

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => setEntries(entries[0]),
			{ rootMargin: '10px' }
		);
		if (target.current) {
			observer.observe(target.current);
		}

		return () => {
			if (target.current) {
				observer.unobserve(target.current);
			}
		};
	}, [target ? target.current : null]);
	return { entries };
}
