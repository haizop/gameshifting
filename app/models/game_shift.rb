# == Schema Information
#
# Table name: game_shifts
#
#  id         :integer          not null, primary key
#  session_id :integer
#  game_set   :json
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_shifts_on_session_id  (session_id)
#

class GameShift < ActiveRecord::Base
  belongs_to :session
end
