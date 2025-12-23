import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const { elementType, sirName } = await request.json();

		if (!elementType || !sirName) {
			return NextResponse.json(
				{ error: 'elementType ve sirName gerekli' },
				{ status: 400 }
			);
		}

		const validElements = ['fire', 'water', 'air', 'earth'];
		if (!validElements.includes(elementType)) {
			return NextResponse.json(
				{ error: 'Geçersiz element tipi' },
				{ status: 400 }
			);
		}

		const supabase = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.SUPABASE_SERVICE_ROLE_KEY!
		);

		const userId = 'demo-user-id';

		const { data: existingSir } = await supabase
			.from('user_sir')
			.select('id')
			.eq('user_id', userId)
			.single();

		if (existingSir) {
			return NextResponse.json(
				{ error: 'Bu kullanıcının zaten bir Sırı var' },
				{ status: 400 }
			);
		}

		const { data, error } = await supabase
			.from('user_sir')
			.insert({
				user_id: userId,
				element_type: elementType,
				sir_name: sirName.trim(),
				level: 1,
				energy: 50,
				color_stage: 1,
				total_lessons: 0,
				total_practices: 0,
				total_journal_entries: 0,
				longest_streak: 0,
				total_visits: 1,
				last_visit: new Date().toISOString(),
				ai_memory: JSON.stringify({
					firstMeeting: new Date().toISOString(),
					highlights: [],
					emotionalNotes: [],
				}),
			})
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return NextResponse.json(
				{ error: 'Sır oluşturulamadı' },
				{ status: 500 }
			);
		}

		return NextResponse.json({
			success: true,
			sir: data,
		});

	} catch (error) {
		console.error('API error:', error);
		return NextResponse.json(
			{ error: 'Sunucu hatası' },
			{ status: 500 }
		);
	}
}
