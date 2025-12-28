import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://primary-production-6826.up.railway.app/webhook/sirdas/message';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, user_id, conversation_id } = body;

    if (!message || !user_id) {
      return NextResponse.json(
        { error: 'message ve user_id gerekli' },
        { status: 400 }
      );
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        user_id,
        conversation_id: conversation_id || `conv-${Date.now()}`,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      console.error('N8N Webhook Error:', response.status, response.statusText);
      return NextResponse.json(
        { 
          error: 'N8N workflow execution failed',
          status: response.status,
          webhook_url: N8N_WEBHOOK_URL
        },
        { status: 502 }
      );
    }

    const text = await response.text();
    const result = text ? JSON.parse(text) : {};

    return NextResponse.json({
      success: true,
      response: result.response || result,
      conversation_id: conversation_id || result.conversation_id || `conv-${Date.now()}`
    });

  } catch (error) {
    console.error('SIRDAS API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
