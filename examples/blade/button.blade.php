@props(['variant' => 'primary', 'size' => 'md', 'type' => 'button'])
@php
  $variants = ['primary' => 'sg-button-primary', 'secondary' => 'sg-button-secondary', 'outline' => 'sg-button-outline'];
  $sizes = ['sm' => 'sg-button-sm', 'md' => '', 'lg' => 'sg-button-lg'];
@endphp
<button type="{{ $type }}" {{ $attributes->class(['sg-button', $variants[$variant] ?? $variants['primary'], $sizes[$size] ?? '']) }}>{{ $slot }}</button>
