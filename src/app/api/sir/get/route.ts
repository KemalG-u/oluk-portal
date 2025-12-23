import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const supabase = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.SUPABASE_SERVICE_ROLE_KEY!
		);

		// TODO: Auth'dan user_id al
		const userId = 'demo-user-id';

		const { data: sir, error } = await supabase
			.from('user_sir')
			.select('*')
			.eq('user_id', userId)
			.single();

		if (error && error.code !== 'PGRST116') {
			console.error('Supabase error:', error);
			return NextResponse.json({ error: 'Sır getirilemedi' }, { status: 500 });
		}

		if (!sir) {
			return NextResponse.json({ sir: null });
		}

		// Enerji hesapla
		const now = new Date();
		const lastVisit = new Date(sir.last_visit);
		const daysSinceVisit = Math.floor(
			(now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24)
		);

		let newEnergy = sir.energy;
    
		if (daysSinceVisit === 0) {
			// Bugün gelmiş
		} else if (daysSinceVisit <= 1) {
			newEnergy = Math.min(100, sir.energy + 5);
		} else if (daysSinceVisit <= 3) {
			newEnergy = Math.max(20, sir.energy - (daysSinceVisit * 2));
		} else if (daysSinceVisit <= 7) {
			newEnergy = Math.max(15, sir.energy - (daysSinceVisit * 3));
		} else {
			newEnergy = Math.max(10, sir.energy - 10);
		}

		// Güncelle
		if (newEnergy !== sir.energy || daysSinceVisit > 0) {
			await supabase
				.from('user_sir')
				.update({
					energy: newEnergy,
					last_visit: now.toISOString(),
					total_visits: sir.total_visits + (daysSinceVisit > 0 ? 1 : 0),
				})
				.eq('user_id', userId);
		}

		return NextResponse.json({
			sir: {
				...sir,
				energy: newEnergy,
				last_visit: now.toISOString(),
			},
			daysSinceLastVisit: daysSinceVisit,
		});

	} catch (error) {
		console.error('API error:', error);
		return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
	}
}
...existing code...