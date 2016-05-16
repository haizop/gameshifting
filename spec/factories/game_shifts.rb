# == Schema Information
#
# Table name: game_shifts
#
#  id              :integer          not null, primary key
#  game_session_id :integer
#  current_game    :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :game_shift do
    
  end

end
